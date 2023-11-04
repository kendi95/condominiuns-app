export const condominiumStore = {
  id: null,
  name: null,
  document: null,
  contact: {
    id: null,
    email: null,
    phone: null,
    cellphone: null,
  },
  address: {
    id: null,
    address: null,
    street_number: null,
    zip_code: null,
    complement: null,
    neighborhood: null,
    city: null,
    province: null,
  },

  create: {
    name: "",
    document: "",
    description: "",

    contact: {
      email: "",
      phone: "",
      cellphone: "",
    }
  },
  list: []
}
