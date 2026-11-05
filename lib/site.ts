export const site = {
  name: "Nguyen Quoc Minh",
  shortName: "minh.dev",
  role: "Software Engineer",
  focus: "AI & Full-stack Web",
  location: "Ho Chi Minh City, Vietnam",
  email: "nquoc.minh.work@gmail.com",
  phone: "+84 964 560 507",
  phoneHref: "tel:0964560507",
  github: "https://github.com/qminh77",
  githubHandle: "@qminh77",
  cv: "/Nguyen-Quoc-Minh-CV.pdf",
  university: "University of Management and Technology (UMT)",
} as const

export const chapters = [
  { id: "profile", no: "01", label: "Profile" },
  { id: "work", no: "02", label: "Work" },
  { id: "experience", no: "03", label: "Experience" },
  { id: "toolkit", no: "04", label: "Toolkit" },
  { id: "credentials", no: "05", label: "Credentials" },
  { id: "contact", no: "06", label: "Contact" },
] as const

export type ChapterId = (typeof chapters)[number]["id"]

export function chapterNumber(id: ChapterId) {
  return chapters.find((chapter) => chapter.id === id)?.no ?? "00"
}
