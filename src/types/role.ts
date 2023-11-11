export type RoleProps = {
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
  }>

  showRoleModals: (modalForm: string, id: number) => void
  dismissRoleModals: (modalForm: string, id: number) => void

  setCreateRoleData: (data: CreateRoleData) => void
  clearCreateRoleData: () => void
  createRole: () => Promise<void>
  listRoles: () => Promise<void>
}

export type CreateRoleData = {
  name: string | ""
  description: string | ""
}