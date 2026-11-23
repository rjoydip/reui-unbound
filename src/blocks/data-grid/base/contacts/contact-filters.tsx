import {
  isFilterGroup,
  isFilterRule,
} from "@/components/kit/filters/~filters-query"
import type { FilterQuery } from "@/components/kit/filters/~filters-types"
import type {
  FilterField,
  FilterNode,
} from "@/components/kit/filters/~filters-types"

import { CONTACTS, scoreBand } from "./data"
import type { Contact } from "./data"

const COMPANIES = [...new Set(CONTACTS.map((contact) => contact.company))]

export const contactFilterFields: FilterField[] = [
  {
    id: "status",
    label: "Status",
    type: "select",
    options: [
      { value: "prospect", label: "Prospect" },
      { value: "customer", label: "Customer" },
    ],
    operators: [
      { value: "is", label: "is" },
      { value: "is-not", label: "is not" },
    ],
    defaultOperator: "is",
  },
  {
    id: "company",
    label: "Company",
    type: "select",
    options: COMPANIES.map((company) => ({ value: company, label: company })),
    operators: [
      { value: "is", label: "is" },
      { value: "is-not", label: "is not" },
    ],
    defaultOperator: "is",
  },
  {
    id: "band",
    label: "Score band",
    type: "select",
    options: [
      { value: "hot", label: "Hot" },
      { value: "warm", label: "Warm" },
      { value: "cold", label: "Cold" },
    ],
    operators: [
      { value: "is", label: "is" },
      { value: "is-not", label: "is not" },
    ],
    defaultOperator: "is",
  },
  {
    id: "score",
    label: "Lead score",
    type: "number",
    operators: [
      { value: "at-least", label: "is at least" },
      { value: "under", label: "is under" },
    ],
    defaultOperator: "at-least",
  },
  {
    id: "pipeline",
    label: "Pipeline",
    type: "number",
    operators: [
      { value: "at-least", label: "is at least" },
      { value: "under", label: "is under" },
    ],
    defaultOperator: "at-least",
  },
]

function matchesRule(rule: FilterNode, contact: Contact): boolean {
  if (!isFilterRule(rule) || rule.operator === "" || rule.value === undefined) {
    return true
  }

  const field = rule.path[0]
  const values = Array.isArray(rule.value) ? rule.value : [rule.value]

  let result = true

  if (field === "status") {
    result =
      rule.operator === "is-not"
        ? contact.status !== values[0]
        : contact.status === values[0]
  } else if (field === "company") {
    result =
      rule.operator === "is-not"
        ? contact.company !== values[0]
        : contact.company === values[0]
  } else if (field === "band") {
    const band = scoreBand(contact.score)
    result =
      rule.operator === "is-not" ? band !== values[0] : band === values[0]
  } else if (field === "score" || field === "pipeline") {
    const target = Number(values[0])
    const value = contact[field]
    result = rule.operator === "under" ? value < target : value >= target
  }

  return rule.negated ? !result : result
}

export function matchesContactQuery(
  contact: Contact,
  query: FilterQuery,
): boolean {
  if (query.rules.length === 0) return true

  const results = query.rules.map((rule) =>
    isFilterGroup(rule)
      ? matchesContactQuery(contact, rule)
      : matchesRule(rule, contact),
  )

  return query.combinator === "or"
    ? results.some(Boolean)
    : results.every(Boolean)
}
