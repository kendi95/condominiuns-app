export type CondominiumProps = {
  id: string | null,
  name: string | null,
  document: string | null,
  description: string | null,
  contact: {
    id: string | null,
    email: string | null,
    phone: string | null,
    cellphone: string | null,
  },
  address: {
    id: string | "",
    address: string | "",
    street_number: string | "",
    zip_code: string | "",
    complement: string | "",
    neighborhood: string | "",
    city: string | "",
    province: string | "",
  },

  create: {
    name: string | ""
    document: string | ""
    description: string | ""

    contact: {
      email: string | ""
      phone: string | ""
      cellphone: string | ""
    }
  }

  list: Array<{
    id: string
    name: string
    document: string

    showEditForm: boolean
    showUserForm: boolean
    showApartmentForm: boolean
    showBlockForm: boolean
  }>

  showCondominiumModals: (modalForm: string, id: string) => void
  dismissCondominiumModals: (modalForm: string, id: string) => void

  setCreateCondominiumData: (data: CreateCondominiumData) => void
  setCreateOrUpdateCondominiumAddress: (data: CreateOrUpdateCondominiumAddress) => void
  clearCreateCondominiumData: () => void
  createCondominium: () => Promise<void>
  listCondominiuns: () => Promise<void>
}

export type CreateCondominiumData = {
  name: string | ""
  document: string | ""
  description: string | ""

  contact: {
    email: string | ""
    phone: string | ""
    cellphone: string | ""
  }
}

export type CreateOrUpdateCondominiumAddress = {
  address: string
  street_number: string
  zip_code: string
  complement: string
  neighborhood: string
  city: string
  province: string
}