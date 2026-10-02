// Case study posts, shown on /case-studies and on the partners page.
// To add one, create pages/case-studies/<slug>.vue and add an entry here (newest first).
export interface Story {
  to: string
  partner: string
  title: string
  excerpt: string
  image: string
  imageAlt: string
}

export const stories: Story[] = [
  {
    to: '/case-studies/hope-restored-missions',
    partner: 'Hope Restored Missions',
    title: '3,500 garments, counted by hand. Until a student team built a better way.',
    excerpt: "Hope Restored Missions used to track ~3,500 donated garments by hand. A UTDesign EPICS team built an inventory system, and NPTS hosts and maintains it so HRM can keep relying on it.",
    image: '/img/case-studies/hope-restored-missions/warehouse.webp',
    imageAlt: 'Racks of donated clothing in the Hope Restored Missions warehouse',
  },
]
