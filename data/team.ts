// The board of directors, shown on the About page in this order.
// To add someone: copy one { ... } block, fill it in, and put their headshot in public/img/team/.
// photo and linkedin are optional. Without a photo, the card shows the person's initials.
export interface TeamMember {
  name: string
  title: string
  photo?: string // file name in public/img/team/, ideally a square .jpg
  bio?: string // one short line
  linkedin?: string
}

export const team: TeamMember[] = [
  {
    name: 'Taz Nakonecznyj',
    title: 'President and Founder',
    photo: 'taz.jpg',
    linkedin: 'https://www.linkedin.com/in/joseph-nako/',
  },
  {
    name: 'Jonathan Harty',
    title: 'Director',
    photo: 'jonathan.jpg',
    linkedin: 'https://www.linkedin.com/in/jonathan-harty/',
  },
  {
    name: 'David Snowden',
    title: 'Treasurer',
    photo: 'david.jpg',
    linkedin: 'https://www.linkedin.com/in/david-snowden241/',
  },
]
