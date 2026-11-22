export type CourseStatus = "Published" | "Draft" | "Archived"

export interface Course {
  id: string
  title: string
  author: string
  created: string
  category: string
  urgency: "Urgent" | "Not Urgent"
  path: number
  score: number
  assigned: number
  assignedMore: number
  completion: number | null
  status: CourseStatus
  image: number
}

export const COURSES: Course[] = [
  { id: "c-1", title: "Accessibility Standards in Product Design", author: "Sofia Lee", created: "20 Feb 2023", category: "Development", urgency: "Urgent", path: 7, score: 4.0, assigned: 3, assignedMore: 2, completion: 55, status: "Published", image: 1 },
  { id: "c-2", title: "Agile Methodologies for Design Teams", author: "James Kim", created: "9 Jan 2023", category: "Fundamental", urgency: "Urgent", path: 9, score: 4.6, assigned: 3, assignedMore: 0, completion: 88, status: "Published", image: 2 },
  { id: "c-3", title: "Brand Identity Systems from Scratch", author: "Sofia Lee", created: "22 Aug 2022", category: "Fundamental", urgency: "Not Urgent", path: 10, score: 4.7, assigned: 2, assignedMore: 0, completion: 100, status: "Published", image: 3 },
  { id: "c-4", title: "Color Theory for Modern Product Design", author: "Priya Agarwal", created: "18 Jun 2022", category: "Design", urgency: "Not Urgent", path: 8, score: 4.3, assigned: 3, assignedMore: 0, completion: 50, status: "Published", image: 4 },
  { id: "c-5", title: "Figma Prototyping Implementation", author: "Rahan Fikri", created: "12 Feb 2022", category: "Design", urgency: "Not Urgent", path: 20, score: 4.5, assigned: 1, assignedMore: 0, completion: null, status: "Draft", image: 5 },
  { id: "c-6", title: "Frontend Development Fundamentals", author: "Sofia Lee", created: "3 Mar 2023", category: "Development", urgency: "Urgent", path: 22, score: 4.8, assigned: 3, assignedMore: 2, completion: 38, status: "Published", image: 6 },
  { id: "c-7", title: "Mastering UI Design for Impactful Products", author: "Rahan Fikri", created: "24 May 2022", category: "Fundamental", urgency: "Not Urgent", path: 15, score: 4.7, assigned: 2, assignedMore: 0, completion: 50, status: "Published", image: 7 },
  { id: "c-8", title: "Mastering UI/UX Design for Impact", author: "Rahan Fikri", created: "28 Oct 2022", category: "UI/UX", urgency: "Not Urgent", path: 12, score: 4.9, assigned: 3, assignedMore: 6, completion: 64, status: "Published", image: 8 },
  { id: "c-9", title: "Design Tokens and Theme Systems", author: "Mira Chen", created: "14 Nov 2022", category: "Design", urgency: "Not Urgent", path: 14, score: 4.6, assigned: 2, assignedMore: 1, completion: 72, status: "Published", image: 3 },
  { id: "c-10", title: "Research Operations Playbook", author: "Owen Hart", created: "6 Apr 2023", category: "UI/UX", urgency: "Not Urgent", path: 11, score: 4.2, assigned: 2, assignedMore: 0, completion: 45, status: "Draft", image: 5 },
  { id: "c-11", title: "Component API Design Patterns", author: "Nadia Petrov", created: "19 Sep 2022", category: "Development", urgency: "Urgent", path: 18, score: 4.8, assigned: 4, assignedMore: 1, completion: 91, status: "Published", image: 6 },
  { id: "c-12", title: "Legacy Layout Systems", author: "Tom Becker", created: "2 Feb 2021", category: "Fundamental", urgency: "Not Urgent", path: 6, score: 3.9, assigned: 2, assignedMore: 0, completion: 100, status: "Archived", image: 1 },
]

export const COURSE_CATEGORIES = [
  "All categories",
  "Fundamental",
  "Development",
  "Design",
  "UI/UX",
]

export const COURSE_TABS: { key: "All" | CourseStatus; count: number }[] = [
  { key: "All", count: 12 },
  { key: "Published", count: 9 },
  { key: "Draft", count: 2 },
  { key: "Archived", count: 1 },
]
