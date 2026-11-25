import { BadgeCheckIcon, CircleUserRoundIcon } from "lucide-react"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Frame, FramePanel } from "@/components/kit/frame"

const PROFILE = {
  name: "Ralph Edwards",
  location: "Sacramento, California",
  avatar:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&dpr=2&q=80",
  cover:
    "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&h=320&fit=crop&q=80",
}

const COLLECTIONS = [
  {
    title: "Analytics Suite",
    projectId: "PX-102",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&q=80",
  },
  {
    title: "Mobile Checkout",
    projectId: "UX-384",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=240&fit=crop&q=80",
  },
  {
    title: "Metrics Console",
    projectId: "DX-271",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop&q=80",
  },
  {
    title: "Design System",
    projectId: "DS-118",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=240&fit=crop&q=80",
  },
]

export function CardContributorPortfolioBlock() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <Frame className="w-full max-w-[25rem]">
        <FramePanel className="p-3">
          <div className="h-36 overflow-hidden rounded-lg bg-muted">
            <img
              src={PROFILE.cover}
              alt=""
              className="size-full object-cover saturate-50"
            />
          </div>

          <div className="-mt-10 flex items-end gap-3 px-1">
            <Avatar className="size-20 ring-4 ring-card">
              <AvatarImage src={PROFILE.avatar} alt={PROFILE.name} />
              <AvatarFallback>RE</AvatarFallback>
              <AvatarBadge className="size-4 bg-green-500" />
            </Avatar>

            <div className="flex min-w-0 flex-1 items-center justify-between gap-2 pb-1">
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="truncate text-base font-semibold tracking-tight">
                    {PROFILE.name}
                  </span>
                  <BadgeCheckIcon className="size-4 shrink-0 text-sky-500" />
                </div>
                <div className="truncate text-sm text-muted-foreground">
                  {PROFILE.location}
                </div>
              </div>
              <Button variant="outline" size="sm" className="shrink-0">
                <CircleUserRoundIcon />
                View Profile
              </Button>
            </div>
          </div>
        </FramePanel>

        <FramePanel className="p-2">
          <ScrollArea className="w-full">
            <div className="flex gap-2 pb-2">
              {COLLECTIONS.map((collection) => (
                <article
                  key={collection.projectId}
                  className="w-40 shrink-0 overflow-hidden rounded-md border bg-card"
                >
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="h-24 w-full object-cover"
                  />
                  <div className="p-2.5">
                    <div className="truncate text-sm font-medium">
                      {collection.title}
                    </div>
                    <div className="truncate text-xs text-muted-foreground">
                      Project ID: {collection.projectId}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </FramePanel>

        <FramePanel className="p-2">
          <Button className="w-full">Get in Touch</Button>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default CardContributorPortfolioBlock
