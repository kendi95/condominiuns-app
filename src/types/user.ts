export type UserProps = {
  id: string,
  name: string | ""
  email: string | ""

  create: {
    name: string | ""
    email: string | ""
    password: string | ""
    id_role: string | ""
  }

  list: Array<{
    id: string
    name: string
    email: string
    roleName: string

    showEditForm: boolean
    showDeleteForm: boolean
  }>

  showUserModals: (modalForm: string, id: string) => void
  dismissUserModals: (modalForm: string, id: string) => void

  setCreateUserData: (data: CreateUserData) => void
  clearCreateUserData: () => void
  createUser: () => Promise<void>
  listUsers: () => Promise<void>
}

export type CreateUserData = {
  name: string | ""
  email: string | ""
  password: string | ""
  id_role: string | ""
}