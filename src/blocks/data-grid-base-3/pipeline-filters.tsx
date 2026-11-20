import {
  isFilterGroup,
  isFilterRule,
} from "@/components/reui-unbound/filters/filters-query"
import type { FilterQuery } from "@/components/reui-unbound/filters/filters-types"
import type {
  FilterField,
  FilterNode,
} from "@/components/reui-unbound/filters/filters-types"

import { OPPORTUNITIES } from "./data"
import type { Opportunity } from "./data"

const OWNERS = [...new Set(OPPORTUNITIES.map((deal) => deal.owner.name))]
const INDUSTRIES = [...new Set(OPPORTUNITIES.map((deal) => deal.industry))]

export const pipelineFilterFields: FilterField[] = [
  {
    id: "stage",
    label: "Stage",
    type: "select",
    options: [
      { value: "Won", label: "Won" },
      { value: "Negotiation", label: "Negotiation" },
      { value: "Proposal Sent", label: "Proposal Sent" },
      { value: "Qualified", label: "Qualified" },
      { value: "Discovery", label: "Discovery" },
    ],
    operators: [
      { value: "is", label: "is" },
      { value: "is-not", label: "is not" },
    ],
    defaultOperator: "is",
  },
  {
    id: "owner",
    label: "Owner",
    type: "select",
    options: OWNERS.map((owner) => ({ value: owner, label: owner })),
    operators: [
      { value: "is", label: "is" },
      { value: "is-not", label: "is not" },
    ],
    defaultOperator: "is",
  },
  {
    id: "industry",
    label: "Industry",
    type: "select",
    options: INDUSTRIES.map((industry) => ({
      value: industry,
      label: industry,
    })),
    operators: [
      { value: "is", label: "is" },
      { value: "is-not", label: "is not" },
    ],
    defaultOperator: "is",
  },
  {
    id: "amount",
    label: "Amount",
    type: "number",
    operators: [
      { value: "at-least", label: "is at least" },
      { value: "under", label: "is under" },
    ],
    defaultOperator: "at-least",
  },
]

function matchesRule(rule: FilterNode, deal: Opportunity): boolean {
  if (!isFilterRule(rule) || rule.operator === "" || rule.value === undefined) {
    return true
  }

  const field = rule.path[0]
  const values = Array.isArray(rule.value) ? rule.value : [rule.value]
  let result = true

  if (field === "stage") {
    result =
      rule.operator === "is-not"
        ? deal.stage !== values[0]
        : deal.stage === values[0]
  } else if (field === "owner") {
    result =
      rule.operator === "is-not"
        ? deal.owner.name !== values[0]
        : deal.owner.name === values[0]
  } else if (field === "industry") {
    result =
      rule.operator === "is-not"
        ? deal.industry !== values[0]
        : deal.industry === values[0]
  } else if (field === "amount") {
    const target = Number(values[0])
    result =
      rule.operator === "under" ? deal.amount < target : deal.amount >= target
  }

  return rule.negated ? !result : result
}

export function matchesPipelineQuery(
  deal: Opportunity,
  query: FilterQuery,
): boolean {
  if (query.rules.length === 0) return true

  const results = query.rules.map((rule) =>
    isFilterGroup(rule)
      ? matchesPipelineQuery(deal, rule)
      : matchesRule(rule, deal),
  )

  return query.combinator === "or"
    ? results.some(Boolean)
    : results.every(Boolean)
}
