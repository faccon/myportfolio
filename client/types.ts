interface contributors {
  Name: string
  Link: string
}

export type ProjectItemProps = {
  image_url: string
  bg_img: string
  icon: string | null
  host: string | null
  type: string
  year: number
  title: string
  Logo?: string
  features: string[]
  contributors?: contributors[]
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
  Dialog: (item: ProjectItemProps | undefined) => void
  vDetailOnClick?: () => void
}

export type CerificationProps = {
  data: CertficateProps
}

export type SkillsSecProps = {
  data: SkillItemProps
}
