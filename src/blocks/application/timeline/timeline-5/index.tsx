const RELEASES = [
  { date: "May 2025", version: "v2.5 Release Channels", description: "Create staged release channels for beta teams, enterprise accounts, and internal QA cohorts.", tags: ["New", "Team Rollout", "Channel Permissions", "Scheduled Publishing"] },
  { date: "Apr 2025", version: "v2.4 AI Assist", description: "Added workspace summaries, prompt presets, and faster review suggestions.", tags: ["New", "Faster Reviews", "Prompt Library", "Review Summaries"] },
  { date: "Mar 2025", version: "v2.3 Theme Studio", description: "Introduced token previews, component states, and one-click CSS exports.", tags: ["Improved", "Design Systems", "Token Previews", "CSS Export"] },
  { date: "Feb 2025", version: "v2.2 Live Editing", description: "Improved shared cursors, presence labels, and conflict-safe draft recovery.", tags: ["Improved", "Collaboration", "Presence Labels", "Draft Recovery"] },
]

export function Timeline5Block() {
  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[544px]">
        <h1 className="text-xl font-semibold">Release Changelog</h1>
        <p className="text-muted-foreground mt-1 text-sm">Recent releases, fixes, and platform updates.</p>

        <div className="mt-6">
          {RELEASES.map((release, index) => (
            <div key={release.version} className="grid grid-cols-[84px_minmax(0,1fr)] gap-3">
              <div className="text-muted-foreground pt-0.5 text-right text-[11px]">{release.date}</div>
              <div className="relative flex gap-3">
                <div className="flex flex-col items-center">
                  <span className="bg-card mt-0.5 size-4 rounded-full border-2" />
                  {index < RELEASES.length - 1 ? <span className="bg-border mt-0.5 w-px flex-1" /> : null}
                </div>
                <div className="min-w-0 flex-1 pb-6">
                  <p className="text-sm font-medium">{release.version}</p>
                  <p className="text-muted-foreground mt-1 text-sm">{release.description}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {release.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className={
                          tagIndex === 0
                            ? "bg-foreground text-background rounded px-1.5 py-0.5 text-[10px]"
                            : "rounded border border-dashed px-1.5 py-0.5 text-[10px] text-muted-foreground"
                        }
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline5Block
