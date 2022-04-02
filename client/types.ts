interface contributors {
  Name: string
  Link: string
}

export type ProjectItemProps = {
  scenario?: string | undefined
  content?: string | undefined
  ongoing: boolean
  url?: string
  icon: string | null
  host: string | null
  type: string
  year: number
  title: string
  Logo?: string
  features?: string[]
  contributors?: contributors[]
  images: string[]
}
export type CertItemProps = {
  pdf_url: string
  name: string
  verify: string
  author: string
  Logo: string | null
  badge: string | null
}

export interface ViewerProps {
  show: boolean
  onHide: () => void
  url: string
  verify: string
  title: string
}

export type SkillItemProps = string[]

export type ProjectProps = ProjectItemProps[]
export type CertficateProps = CertItemProps[]

export type dataProps = {
  certifications?: CertficateProps
  projects?: ProjectProps
  skills?: string[]
}
export type RecentProjectProps = {
  data?: ProjectProps
  Dialog: (item: ProjectItemProps | undefined) => void
  vDetailOnClick?: () => void
}

export type CerificationProps = {
  data?: CertficateProps
}

export type SkillsSecProps = {
  data?: SkillItemProps
}
