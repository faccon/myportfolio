export type ProjectItemProps = {
  image_url: string
  bg_img: string
  notes: string[]
  icon: string | null
  host: string | null
  type: string
  year: number
  title: string
  Logo?: string
}
export type CertItemProps = {
  image_url: string
  name: string
  verify: string | null
  author: string
  Logo: string | null
  badge: string | null
}

export type SkillItemProps = string[]

export type ProjectProps = ProjectItemProps[]
export type CertficateProps = CertItemProps[]

export type RecentProjectProps = {
  data: ProjectProps
  vDetailOnClick?: () => null
}

export type CerificationProps = {
  data: CertficateProps
}

export type SkillsSecProps = {
  data: SkillItemProps
}
