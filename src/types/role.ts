export type RoleProps = {
  id: number | null,
  name: string | null,
  description: string | null,

  create: {
    name: string | null
    description: string | null
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