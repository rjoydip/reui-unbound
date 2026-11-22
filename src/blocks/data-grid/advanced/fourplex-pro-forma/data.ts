export const YEARS = [
  "Year 1",
  "Year 2",
  "Year 3",
  "Year 4",
  "Year 5",
  "Year 6",
]

export type Section = "growth" | "revenue" | "expenses" | "cashflow"

export type RowKind = "input" | "computed" | "total" | "result"

export interface ProFormaLine {
  id: string
  label: string
  section: Section
  basis: string
  monthly: number
  /** One entry per year. */
  values: number[]
  percent?: boolean
}

export interface ProFormaRow extends ProFormaLine {
  kind: RowKind
  /** First row of a section carries the section label. */
  sectionStart: boolean
}

export const SECTIONS: {
  key: Section
  label: string
  dot: string
  tint: string
}[] = [
  {
    key: "growth",
    label: "Growth rates",
    dot: "bg-info",
    tint: "bg-info/5",
  },
  {
    key: "revenue",
    label: "Revenues",
    dot: "bg-success",
    tint: "bg-success/8",
  },
  {
    key: "expenses",
    label: "Expenses",
    dot: "bg-warning",
    tint: "bg-warning/8",
  },
  {
    key: "cashflow",
    label: "Cash flow",
    dot: "bg-primary",
    tint: "bg-primary/8",
  },
]

export const LOAN = {
  price: 425000,
  downPercent: 25,
  closing: 8500,
  loan: 318800,
  rate: 6.5,
  term: 30,
  payment: 2015,
}

export const DEBT_SERVICE = LOAN.payment * 12

export const INITIAL_LINES: ProFormaLine[] = [
  {
    id: "rev-growth",
    label: "Revenue growth",
    section: "growth",
    basis: "Yearly",
    monthly: 0,
    values: [0, 3.5, 3.5, 3.5, 3.5, 3.5],
    percent: true,
  },
  {
    id: "exp-growth",
    label: "Expense growth",
    section: "growth",
    basis: "Yearly",
    monthly: 0,
    values: [0, 2.5, 2.5, 2.5, 2.5, 2.5],
    percent: true,
  },
  {
    id: "appreciation",
    label: "Appreciation rate",
    section: "growth",
    basis: "Yearly",
    monthly: 0,
    values: [0, 3, 3, 3, 3, 3],
    percent: true,
  },
  {
    id: "rental",
    label: "Rental income",
    section: "revenue",
    basis: "Monthly",
    monthly: 3950,
    values: [47400, 49059, 50776, 52553, 54393, 56696],
  },
  {
    id: "vacancy",
    label: "Vacancy",
    section: "revenue",
    basis: "% Gross rent",
    monthly: -277,
    values: [-3318, -3434, -3554, -3679, -3807, -4021],
  },
  {
    id: "parking",
    label: "Parking",
    section: "revenue",
    basis: "Monthly",
    monthly: 120,
    values: [1440, 1490, 1543, 1597, 1652, 1710],
  },
  {
    id: "other-income",
    label: "Other income",
    section: "revenue",
    basis: "Monthly",
    monthly: 85,
    values: [1020, 1056, 1093, 1131, 1170, 1211],
  },
  {
    id: "property-taxes",
    label: "Property taxes",
    section: "expenses",
    basis: "Annual",
    monthly: 390,
    values: [4680, 4797, 4917, 5040, 5166, 5295],
  },
  {
    id: "insurance",
    label: "Insurance",
    section: "expenses",
    basis: "Annual",
    monthly: 115,
    values: [1380, 1414, 1450, 1486, 1523, 1561],
  },
  {
    id: "management",
    label: "Property mgmt",
    section: "expenses",
    basis: "% Eff. Rent",
    monthly: 294,
    values: [3527, 3650, 3778, 3910, 4047, 4188],
  },
  {
    id: "repairs",
    label: "Repairs",
    section: "expenses",
    basis: "Annual",
    monthly: 221,
    values: [2650, 2716, 2784, 2854, 2925, 2998],
  },
  {
    id: "utilities",
    label: "Utilities",
    section: "expenses",
    basis: "Monthly",
    monthly: 185,
    values: [2220, 2276, 2332, 2391, 2450, 2512],
  },
  {
    id: "reserves",
    label: "Capital reserves",
    section: "expenses",
    basis: "Annual",
    monthly: 100,
    values: [1200, 1230, 1261, 1292, 1325, 1358],
  },
]

function sumRows(
  rows: ProFormaRow[],
  section: Section,
  onlyInputs = true,
) {
  return YEARS.map((_, year) =>
    rows
      .filter(
        (row) =>
          row.section === section && (!onlyInputs || row.kind === "input"),
      )
      .reduce((sum, row) => sum + (row.values[year] ?? 0), 0),
  )
}

function monthlyOf(values: number[]) {
  return Math.round((values[0] ?? 0) / 12)
}

/** Adds computed subtotals on top of the editable input lines. */
export function computeRows(lines: ProFormaLine[]): ProFormaRow[] {
  const inputs: ProFormaRow[] = lines.map((line) => ({
    ...line,
    kind: "input",
    sectionStart: false,
  }))

  const effective: ProFormaRow = {
    id: "effective-rent",
    label: "Effective rent",
    section: "revenue",
    basis: "Monthly",
    monthly: 0,
    values: YEARS.map(
      (_, year) =>
        (inputs.find((row) => row.id === "rental")?.values[year] ?? 0) +
        (inputs.find((row) => row.id === "vacancy")?.values[year] ?? 0),
    ),
    kind: "computed",
    sectionStart: false,
  }
  effective.monthly = monthlyOf(effective.values)

  const revenueRows = [...inputs, effective]
  const totalRevenue: ProFormaRow = {
    id: "total-revenue",
    label: "Gross income",
    section: "revenue",
    basis: "",
    monthly: 0,
    values: sumRows(revenueRows, "revenue"),
    kind: "total",
    sectionStart: false,
  }
  totalRevenue.monthly = monthlyOf(totalRevenue.values)

  const totalExpenses: ProFormaRow = {
    id: "total-expenses",
    label: "Total expenses",
    section: "expenses",
    basis: "",
    monthly: 0,
    values: sumRows(inputs, "expenses"),
    kind: "total",
    sectionStart: false,
  }
  totalExpenses.monthly = monthlyOf(totalExpenses.values)

  const noi: ProFormaRow = {
    id: "noi",
    label: "NOI",
    section: "expenses",
    basis: "",
    monthly: 0,
    values: YEARS.map(
      (_, year) =>
        (totalRevenue.values[year] ?? 0) - (totalExpenses.values[year] ?? 0),
    ),
    kind: "result",
    sectionStart: false,
  }
  noi.monthly = monthlyOf(noi.values)

  const invested = LOAN.price * (LOAN.downPercent / 100) + LOAN.closing
  const cashFlow: ProFormaRow = {
    id: "cash-flow",
    label: "Cash flow",
    section: "cashflow",
    basis: "",
    monthly: 0,
    values: YEARS.map(
      (_, year) => (noi.values[year] ?? 0) - DEBT_SERVICE,
    ),
    kind: "total",
    sectionStart: false,
  }
  cashFlow.monthly = monthlyOf(cashFlow.values)

  const cashAvailable: ProFormaRow = {
    id: "cash-available",
    label: "Cash available",
    section: "cashflow",
    basis: "",
    monthly: 0,
    values: noi.values,
    kind: "computed",
    sectionStart: false,
  }
  cashAvailable.monthly = monthlyOf(cashAvailable.values)

  const totalRoi: ProFormaRow = {
    id: "total-roi",
    label: "Total ROI",
    section: "cashflow",
    basis: "On cash in",
    monthly: 0,
    values: cashFlow.values.map((value) => (value / invested) * 100),
    kind: "result",
    percent: true,
    sectionStart: false,
  }

  const order: Section[] = ["growth", "revenue", "expenses", "cashflow"]
  const bySection = {
    growth: inputs.filter((row) => row.section === "growth"),
    revenue: [
      ...inputs.filter((row) => row.section === "revenue" && row.id !== "parking" && row.id !== "other-income"),
      effective,
      ...inputs.filter((row) => row.id === "parking" || row.id === "other-income"),
      totalRevenue,
    ],
    expenses: [
      ...inputs.filter((row) => row.section === "expenses"),
      totalExpenses,
      noi,
    ],
    cashflow: [cashFlow, cashAvailable, totalRoi],
  }

  return order.flatMap((section) =>
    bySection[section].map((row, index) => ({
      ...row,
      sectionStart: index === 0,
    })),
  )
}

const whole = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

export function formatMoney(value: number) {
  return whole.format(value)
}


export function formatValue(row: ProFormaRow, value: number) {
  if (row.percent) return `${value.toFixed(1)}%`
  return whole.format(value)
}

export function summary(rows: ProFormaRow[]) {
  const noi = rows.find((row) => row.id === "noi")
  const cash = rows.find((row) => row.id === "cash-flow")
  const roi = rows.find((row) => row.id === "total-roi")
  return {
    noi: noi?.values[0] ?? 0,
    cash: cash?.values[0] ?? 0,
    roi: roi?.values[0] ?? 0,
  }
}

export function makeLine(input: {
  label: string
  section: Section
  monthly: number
  yearOne: number
}): ProFormaLine {
  return {
    id: `line-${Date.now().toString(36)}`,
    label: input.label,
    section: input.section,
    basis: "Monthly",
    monthly: input.monthly,
    values: YEARS.map((_, index) =>
      Math.round(input.yearOne * Math.pow(1.025, index)),
    ),
  }
}

