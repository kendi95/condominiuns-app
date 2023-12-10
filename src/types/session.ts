export type SessionProps = {
  token: string
  user: {
    id: string
    name: string
    email: string
    status: boolean
    role: {
      id: number | null
      name: string
      description: string
      permissions: {
        id: number | null
        name: string
      }[]
    }
  }

  signin: (data: SigninData) => Promise<void>
  signout: () => Promise<void>
}

export type SigninData = {
  email: string | ""
  password: string | ""
}