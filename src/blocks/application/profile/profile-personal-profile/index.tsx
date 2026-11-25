import { useState } from "react"
import {
  AlertCircleIcon,
  InfoIcon,
  Trash2Icon,
  UploadIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function Label({ children, hint }: { children: React.ReactNode; hint?: boolean }) {
  return (
    <span className="flex items-center gap-1.5 text-sm font-medium">
      {children}
      {hint ? <InfoIcon className="text-muted-foreground size-3.5" /> : null}
    </span>
  )
}

export function ProfilePersonalProfileBlock() {
  const [alertOpen, setAlertOpen] = useState(true)

  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[900px]">
        <h1 className="text-2xl font-semibold">Profile</h1>
        <p className="text-muted-foreground mt-1 text-sm">Manage the identity and regional details shared across your workspace memberships.</p>

        {alertOpen ? (
          <div className="border-warning/30 bg-warning/10 mt-6 flex flex-wrap items-center gap-3 rounded-lg border px-4 py-3">
            <AlertCircleIcon className="size-4" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">Profile updates are shared</p>
              <p className="text-muted-foreground text-sm">Changes sync to mentions, approvals, and people directories in every workspace you join.</p>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setAlertOpen(false)}>Dismiss</Button>
            <Button size="sm">Review Details</Button>
          </div>
        ) : null}

        <div className="bg-card mt-6 overflow-hidden rounded-xl border">
          <div className="border-b p-6">
            <div className="flex items-start gap-4">
              <Avatar size="lg" className="size-16">
                <AvatarImage src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=128&h=128&dpr=2&q=80" alt="" />
                <AvatarFallback>SR</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-sm font-semibold">Profile Picture</h2>
                <p className="text-muted-foreground text-sm">We only support PNGs, JPEGs and GIFs under 10MB.</p>
                <div className="mt-2 flex items-center gap-2">
                  <Button size="sm"><UploadIcon />Upload</Button>
                  <Button variant="destructive" size="icon-sm" aria-label="Remove profile picture"><Trash2Icon /></Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b p-6">
            <h2 className="text-sm font-semibold">Basic Details</h2>
            <p className="text-muted-foreground text-sm">Keep your contact and identity fields current.</p>

            <div className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label>First Name</Label>
                <Input defaultValue="Shandc" aria-label="First name" />
              </div>
              <div className="space-y-1.5">
                <Label>Last Name</Label>
                <Input placeholder="Optional" aria-label="Last name" />
              </div>
              <div className="space-y-1.5">
                <Label hint>Primary Email Address</Label>
                <div className="flex items-center gap-2">
                  <span className="flex h-8 flex-1 items-center rounded-lg border px-3 text-sm">shandc@reui.dev</span>
                  <Badge variant="success-light" size="sm">Verified</Badge>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
                <p className="text-muted-foreground text-xs">Used for sign-in, recovery, and workspace notices.</p>
              </div>
              <div className="space-y-1.5">
                <Label hint>Preferred Name</Label>
                <Input defaultValue="Shandc" aria-label="Preferred name" />
              </div>
              <div className="space-y-1.5">
                <Label hint>Username</Label>
                <Input defaultValue="@ shandc" aria-label="Username" />
              </div>
              <div className="space-y-1.5">
                <Label>Role</Label>
                <Select defaultValue="Product Operations">
                  <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Product Operations">Product Operations</SelectItem>
                    <SelectItem value="Designer">Designer</SelectItem>
                    <SelectItem value="Engineer">Engineer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Phone Number</Label>
                <Input defaultValue="+1 206 555 1243" aria-label="Phone number" />
                <p className="text-muted-foreground text-xs">Used only for urgent verification and recovery.</p>
              </div>
              <div className="space-y-1.5">
                <Label>Website</Label>
                <Input defaultValue="https:// shandc.dev" aria-label="Website" />
              </div>
            </div>

            <div className="mt-6 border-t pt-5">
              <h3 className="text-sm font-semibold">Regional Preferences</h3>
              <p className="text-muted-foreground text-sm">Choose how time and scheduling fields appear.</p>
              <div className="mt-4 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label hint>Preferred Timezone</Label>
                  <Select defaultValue="(GMT-5) New York"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="(GMT-5) New York">(GMT-5) New York</SelectItem><SelectItem value="(GMT+1) Berlin">(GMT+1) Berlin</SelectItem></SelectContent></Select>
                </div>
                <div className="space-y-1.5">
                  <Label hint>Start Week On</Label>
                  <Select defaultValue="Monday"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="Monday">Monday</SelectItem><SelectItem value="Sunday">Sunday</SelectItem></SelectContent></Select>
                </div>
                <div className="space-y-1.5">
                  <Label>Language</Label>
                  <Select defaultValue="English"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="English">English</SelectItem><SelectItem value="Deutsch">Deutsch</SelectItem></SelectContent></Select>
                </div>
                <div className="space-y-1.5">
                  <Label>Time Format</Label>
                  <Select defaultValue="24-hour"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="24-hour">24-hour</SelectItem><SelectItem value="12-hour">12-hour</SelectItem></SelectContent></Select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 px-6 py-3">
            <p className="text-muted-foreground text-xs">Save once to update your shared profile across every workspace.</p>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" size="sm">Reset</Button>
              <Button size="sm">Save Changes</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePersonalProfileBlock
