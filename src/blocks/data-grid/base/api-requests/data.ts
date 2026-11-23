export interface Region {
  code: string
  city: string
  country: string
}

export const REGIONS: Record<string, Region> = {
  cdg: { code: "cdg", city: "Paris", country: "France" },
  lhr: { code: "lhr", city: "London", country: "United Kingdom" },
  sfo: { code: "sfo", city: "San Francisco", country: "United States" },
  bom: { code: "bom", city: "Mumbai", country: "India" },
  hnd: { code: "hnd", city: "Tokyo", country: "Japan" },
  cle: { code: "cle", city: "Cleveland", country: "United States" },
}

const PATHS: [string, string][] = [
  ["/v2/availability?date=2026-10-29", "api.fernhill.dev"],
  ["/v2/availability?date=2026-10-28", "api.fernhill.dev"],
  ["/v2/bookings", "api.fernhill.dev"],
  ["/v2/bookings/bk_5o6uaz", "api.fernhill.dev"],
  ["/dashboard/calendar", "app.fernhill.dev"],
  ["/v2/auth/token", "api.fernhill.dev"],
  ["/calendar/sync", "hooks.fernhill.dev"],
  ["/v2/payments/intents", "api.fernhill.dev"],
  ["/v2/availability?date=2026-10-30", "api.fernhill.dev"],
  ["/v1/webhooks/stripe", "hooks.fernhill.dev"],
  ["/v2/customers", "api.fernhill.dev"],
  ["/v2/invoices/inv_9f2c", "api.fernhill.dev"],
]

const RAW: [string, "GET" | "POST", number, number, string, number][] = [
  ["14:59:05", "GET", 200, 0, "cdg", 67],
  ["14:56:46", "GET", 503, 1, "lhr", 25],
  ["14:53:56", "GET", 503, 1, "sfo", 74],
  ["14:50:55", "GET", 200, 0, "bom", 100],
  ["14:41:23", "POST", 201, 0, "sfo", 317],
  ["14:33:52", "GET", 200, 2, "hnd", 249],
  ["14:26:55", "GET", 200, 6, "cle", 267],
  ["14:18:36", "POST", 401, 4, "lhr", 168],
  ["14:07:55", "POST", 202, 5, "cdg", 104],
  ["13:51:18", "POST", 201, 9, "sfo", 886],
  ["13:44:02", "GET", 200, 7, "hnd", 45],
  ["13:32:40", "GET", 500, 1, "bom", 132],
  ["13:21:17", "GET", 200, 3, "lhr", 88],
  ["13:12:09", "GET", 200, 10, "cdg", 210],
  ["12:58:44", "POST", 500, 11, "sfo", 512],
  ["12:47:31", "GET", 200, 2, "cle", 61],
  ["12:33:12", "GET", 429, 8, "hnd", 340],
  ["12:19:57", "GET", 200, 4, "bom", 96],
  ["12:08:33", "POST", 201, 7, "lhr", 175],
  ["11:56:21", "GET", 200, 5, "cdg", 58],
  ["11:42:08", "GET", 200, 1, "sfo", 690],
  ["11:29:45", "GET", 503, 3, "hnd", 233],
  ["11:17:39", "POST", 401, 6, "bom", 42],
  ["11:04:26", "GET", 200, 9, "cle", 118],
  ["10:52:14", "GET", 200, 2, "lhr", 205],
  ["10:39:58", "GET", 200, 4, "cdg", 73],
  ["10:24:41", "POST", 201, 8, "sfo", 152],
  ["10:11:03", "GET", 200, 5, "hnd", 284],
]

export interface RequestLog {
  id: string
  time: string
  method: "GET" | "POST"
  status: number
  path: string
  host: string
  latency: number
  region: Region
  requestBody: string | null
  responseBody: string
  headers: Record<string, string>
}

function statusGroup(status: number) {
  if (status >= 500) return "5xx"
  if (status >= 400) return "4xx"
  return "2xx"
}

export const LOGS: RequestLog[] = RAW.map(
  ([time, method, status, pathIndex, regionCode, latency], index) => {
    const [path, host] = PATHS[pathIndex]
    const body =
      method === "POST"
        ? JSON.stringify(
            {
              account: "acct_8f21",
              payload: { route: path, attempt: index + 1 },
            },
            null,
            2,
          )
        : null
    const response =
      status >= 500
        ? JSON.stringify(
            { error: "upstream_unavailable", retryable: true },
            null,
            2,
          )
        : status >= 400
          ? JSON.stringify({ error: "unauthorized", code: status }, null, 2)
          : JSON.stringify(
              {
                ok: true,
                resource: path.split("?")[0],
                request_id: `req_${index}${time.replaceAll(":", "")}`,
              },
              null,
              2,
            )

    return {
      id: `log-${index}`,
      time: `Oct 26, ${time}`,
      method,
      status,
      path,
      host,
      latency,
      region: REGIONS[regionCode],
      requestBody: body,
      responseBody: response,
      headers: {
        "content-type": "application/json",
        "x-request-id": `req_${index}${time.replaceAll(":", "")}`,
        "x-edge-region": regionCode,
        "user-agent": "fernhill-dashboard/2.4.1",
      },
    }
  },
)

export function groupOf(log: RequestLog) {
  return statusGroup(log.status)
}

export const STATUS_TONE = {
  "2xx": { dot: "bg-success", text: "text-success-foreground" },
  "4xx": { dot: "bg-warning", text: "text-warning-foreground" },
  "5xx": { dot: "bg-destructive", text: "text-destructive" },
} as const

/** Requests per 40-minute bucket over the last 24 hours. */
export const TRAFFIC = Array.from({ length: 36 }, (_, index) => {
  const minutesAgo = (35 - index) * 40
  const ok = 14 + ((index * 7) % 5) + (index < 22 ? 1 : 0)
  const warn = [0, 1, 2, 3][index % 4] + (index < 7 ? 1 : 0)
  const error = index === 0 ? 1 : [2, 1, 1, 1][index % 4]
  const date = new Date(2026, 9, 26, 15, 20)
  date.setMinutes(date.getMinutes() - minutesAgo)

  return {
    index,
    label: date.toTimeString().slice(0, 5),
    ok,
    warn,
    error,
    minutesAgo,
    release: index === 22 ? "v4.19.0" : undefined,
  }
})

export function trafficTotals(buckets = TRAFFIC) {
  const requests = buckets.reduce(
    (sum, bucket) => sum + bucket.ok + bucket.warn + bucket.error,
    0,
  )
  const errors = buckets.reduce(
    (sum, bucket) => sum + bucket.warn + bucket.error,
    0,
  )
  const serverErrors = buckets.reduce((sum, bucket) => sum + bucket.error, 0)

  return {
    requests,
    errors,
    serverErrors,
    errorRate: requests === 0 ? 0 : (errors / requests) * 100,
    availability:
      requests === 0 ? 100 : ((requests - serverErrors) / requests) * 100,
  }
}

export function trafficByGroup(buckets = TRAFFIC) {
  return buckets.reduce(
    (totals, bucket) => ({
      "2xx": totals["2xx"] + bucket.ok,
      "4xx": totals["4xx"] + bucket.warn,
      "5xx": totals["5xx"] + bucket.error,
    }),
    { "2xx": 0, "4xx": 0, "5xx": 0 },
  )
}

export function routeHealth(logs: RequestLog[]) {
  const latencies = logs.map((log) => log.latency).sort((a, b) => a - b)
  const pick = (quantile: number) =>
    latencies.length === 0
      ? 0
      : latencies[
          Math.min(
            latencies.length - 1,
            Math.floor(quantile * latencies.length),
          )
        ]
  const failures = logs.filter((log) => log.status >= 400).length

  return {
    p50: pick(0.5),
    p95: pick(0.95),
    errorRate: logs.length === 0 ? 0 : (failures / logs.length) * 100,
  }
}

export function replayOutcome(status: number) {
  if (status >= 500)
    return {
      ok: true,
      status: 200,
      message: "Replay succeeded upstream now healthy.",
    }
  if (status === 401)
    return {
      ok: false,
      status: 401,
      message: "Replay rejected: token still invalid.",
    }
  return { ok: true, status, message: "Replay matched the original response." }
}
