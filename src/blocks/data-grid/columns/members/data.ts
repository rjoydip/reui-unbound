export type MemberRole = "Member" | "Admin" | "Owner" | "Guest"

export interface DirectoryMember {
  id: string
  name: string
  email: string
  role: MemberRole
  team: "Design" | "Growth" | "Core" | "Platform"
  rating: number
  lastSeen: string
  online: boolean
  activity: number
  joined: string
}

const FIRST: [string, string, DirectoryMember["role"], DirectoryMember["team"], number, string, boolean, number, string][] = [
  ["Adam West", "adam.west@example.com", "Member", "Design", 4.4, "Aug 2025", false, 73, "Aug 2025"],
  ["Amara Cole", "amara.cole@example.com", "Admin", "Growth", 4.7, "Online", true, 90, "Jun 2025"],
  ["Avery Stone", "avery.stone@example.com", "Owner", "Core", 4.5, "Online", true, 77, "Apr 2026"],
  ["Ben Walker", "ben.walker@example.com", "Admin", "Core", 4.8, "Online", true, 93, "Apr 2025"],
  ["Clara Meyer", "clara.meyer@example.com", "Admin", "Design", 4.7, "Online", true, 91, "Oct 2024"],
  ["Dante Ruiz", "dante.ruiz@example.com", "Guest", "Growth", 4.0, "Jan 2025", false, 49, "Jan 2025"],
  ["Elena Park", "elena.park@example.com", "Admin", "Platform", 4.7, "Online", true, 86, "Sep 2025"],
  ["Eli Morris", "eli.morris@example.com", "Member", "Platform", 4.1, "Nov 2024", false, 52, "Nov 2024"],
]

export const DIRECTORY_MEMBERS: DirectoryMember[] = [
  ...FIRST.map(([name, email, role, team, rating, lastSeen, online, activity, joined], index) => ({
    id: `m-${index + 1}`,
    name,
    email,
    role,
    team,
    rating,
    lastSeen,
    online,
    activity,
    joined,
  })),
  ...Array.from({ length: 20 }, (_, index) => {
    const names = [
      "Fiona Reed", "Gabriel Soto", "Hana Kim", "Isaac Turner", "Jade Patel",
      "Kai Nakamura", "Lena Ortiz", "Milo Fraser", "Nora Ibrahim", "Owen Blake",
      "Pia Anders", "Quinn Foster", "Rosa Diaz", "Samir Khan", "Tara Lewis",
      "Umar Haddad", "Vera Costa", "Wes Carter", "Xena Moore", "Yara Nasser",
    ]
    const teams: DirectoryMember["team"][] = ["Design", "Growth", "Core", "Platform"]
    return {
      id: `m-${index + 9}`,
      name: names[index],
      email: `${names[index].toLowerCase().replace(" ", ".")}@example.com`,
      role: (index % 5 === 0 ? "Admin" : "Member") as MemberRole,
      team: teams[index % teams.length],
      rating: 4 + ((index * 3) % 9) / 10,
      lastSeen: index % 3 === 0 ? "Online" : ["Feb 2025", "Mar 2025", "Jul 2025", "Dec 2024"][index % 4],
      online: index % 3 === 0,
      activity: 55 + ((index * 7) % 40),
      joined: ["Feb 2025", "May 2024", "Aug 2024", "Jan 2026"][index % 4],
    }
  }),
]

export const TEAM_TONES: Record<string, string> = {
  Design: "bg-purple-500",
  Growth: "bg-success",
  Core: "bg-info",
  Platform: "bg-warning",
}
