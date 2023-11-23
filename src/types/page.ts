export type PageProps = {
  id: number,
  name: string | ""
  description: string | ""

  create: {
    name: string | ""
    description: string | ""
  }

  list: Array<{
    id: number
    name: string

    showEditForm: boolean
    showDeleteForm: boolean
  }>

  showPageModals: (modalForm: string, id: number) => void
  dismissPageModals: (modalForm: string, id: number) => void

  setCreatePageData: (data: CreatePageData) => void
  clearCreatePageData: () => void
  createPage: () => Promise<void>
  listPages: () => Promise<void>
}

export type CreatePageData = {
  name: string | ""
  description: string | ""
}