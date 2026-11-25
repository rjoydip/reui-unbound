import { useState } from "react"

import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type RowData = { label: string; email?: boolean; slack?: boolean; app?: boolean }

const DATA: Record<string, { group: string; rows: RowData[] }[]> = {
  Projects: [
    {
      group: "Task activity",
      rows: [
        { label: "Task assigned to you", email: true, app: true },
        { label: "Due date approaching", email: true },
        { label: "Status changed", app: true },
        { label: "Mentioned in a comment", email: true, slack: true, app: true },
        { label: "File attachment added" },
      ],
    },
    {
      group: "Project updates",
      rows: [
        { label: "Milestone completed", email: true, app: true },
        { label: "Sprint ended", email: true },
        { label: "New member added to project", app: true },
        { label: "Project archived", email: true },
      ],
    },
  ],
  Messages: [
    {
      group: "Direct messages",
      rows: [
        { label: "New direct message", email: true, app: true },
        { label: "Mentioned in a thread", email: true, slack: true, app: true },
        { label: "Reaction added" },
      ],
    },
  ],
  Reports: [
    {
      group: "Report activity",
      rows: [
        { label: "Weekly summary ready", email: true, app: true },
        { label: "Shared report updated", email: true },
        { label: "Export completed" },
      ],
    },
  ],
  System: [
    {
      group: "Account health",
      rows: [
        { label: "Security alert", email: true, app: true },
        { label: "Failed payment", email: true, app: true },
        { label: "API limit reached", email: true },
      ],
    },
  ],
}

function ChannelTable({ group, rows }: { group: string; rows: RowData[]; tab?: string }) {
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">{group}</p>
        <div className="text-muted-foreground grid grid-cols-3 gap-5 text-xs">
          <span>Email</span><span>Slack</span><span>In-app</span>
        </div>
      </div>
      <Table className="mt-2">
        <TableHeader className="sr-only">
          <TableRow><TableHead>Event</TableHead><TableHead>Email</TableHead><TableHead>Slack</TableHead><TableHead>In-app</TableHead></TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.label}>
              <TableCell className="text-sm">{row.label}</TableCell>
              <TableCell><Checkbox defaultChecked={row.email} aria-label={`${row.label} email`} /></TableCell>
              <TableCell><Checkbox defaultChecked={row.slack} aria-label={`${row.label} Slack`} /></TableCell>
              <TableCell><Checkbox defaultChecked={row.app} aria-label={`${row.label} in-app`} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export function Settings11Block() {
  const [tab, setTab] = useState("Projects")

  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[896px]">
        <h1 className="text-2xl font-semibold">Notification Channels</h1>
        <p className="text-muted-foreground mt-1 text-sm">Pick where each type of update lands so nothing important gets missed.</p>

        <Tabs value={tab} onValueChange={setTab} className="mt-6 gap-0">
          <TabsList variant="line" className="h-9 gap-5 border-b">
            {Object.keys(DATA).map((name) => <TabsTrigger key={name} value={name} className="px-0">{name}</TabsTrigger>)}
          </TabsList>
          {Object.entries(DATA).map(([name, groups]) => (
            <TabsContent key={name} value={name} className="mt-4">
              {groups.map((group) => <ChannelTable key={group.group} group={group.group} rows={group.rows} tab={name} />)}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

export default Settings11Block
