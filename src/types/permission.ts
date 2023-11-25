export type PermissionProps = {
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

  showPermissionModals: (modalForm: string, id: number) => void
  dismissPermissionModals: (modalForm: string, id: number) => void

  setCreatePermissionData: (data: CreatePermissionData) => void
  clearCreatePermissionData: () => void
  createPermission: () => Promise<void>
  listPermissions: () => Promise<void>
}

export type CreatePermissionData = {
  name: string | ""
  description: string | ""
}