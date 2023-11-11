import { create } from "zustand";
import { v4 as uuidV4 } from "uuid"

import { AppProps } from "../types"
import { 
  CondominiumProps, 
  CreateCondominiumData, 
  CreateOrUpdateCondominiumAddress,
} from "../types/condominium";
import { CreateRoleData, RoleProps } from "../types/role"

import { condominiumStore } from "./stores/condominium"
import { rolesStore } from "./stores/roles"

type AppStore = {
  app: AppProps
  role: RoleProps
  condominium: CondominiumProps

  toggleMenu: () => void
  toggleNewRegisterDrawer: (opened: boolean) => void
  navigationPage: (page: number) => void
  toggleQuestionModal: (opened: boolean) => void
}

export const useAppStore = create<AppStore>((set, get) => {
  return {
    app: {
      showedMenu: false,
      openedDrawer: false,
      loadingContent: false,
      currentPage: 1,
      totalPages: 5,

      openedQuestionModal: false
    },
    
    condominium: {
      ...condominiumStore,

      showCondominiumModals: (modalForm: string, id: string) => {
        const { condominium: { list } } = get()

        const newDatas = list.map((data) => {
          if (id === data.id) {
            return {
              ...data,
              [modalForm]: true
            }
          }

          return data
        })

        set(state => {
          return {
            ...state,
            condominium: {
              ...state.condominium,
              list: newDatas,
            }
          }
        })
      },
      dismissCondominiumModals: (modalForm: string, id: string) => {
        const { condominium: { list } } = get()

        const newDatas = list.map((data) => {
          if (id === data.id) {
            return {
              ...data,
              [modalForm]: false
            }
          }

          return data
        })

        set(state => {
          return {
            ...state,
            condominium: {
              ...state.condominium,
              list: newDatas,
            }
          }
        })
      },
      setCreateCondominiumData: (data: CreateCondominiumData) => {
        set(state => {
          return {
            ...state,
            condominium: {
              ...state.condominium,
              create: {
                ...state.condominium.create,
                ...data
              }
            }
          }
        })
      },
      setCreateOrUpdateCondominiumAddress: (data: CreateOrUpdateCondominiumAddress) => {
        set(state => {
          return {
            ...state,
            condominium: {
              ...state.condominium,
              address: {
                ...state.condominium.address,
                ...data,
              },
            }
          }
        })
      },
      clearCreateCondominiumData: () => {
        set(state => {
          return {
            ...state,
            condominium: {
              ...state.condominium,
              create: {
                name: "",
                document: "",
                description: "",
          
                contact: {
                  email: "",
                  phone: "",
                  cellphone: "",
                }
              }
            }
          }
        })
      },
      createCondominium: async () => {
        const { condominium: { create } } = get()
  
        console.log(create)
  
        /*
        * 1 = get datas from store condominium
        * 2 = validate datas
        * 3 = send to API
        */
      },
      listCondominiuns: async () => {
        set(state => {
          return {
            app: {
              ...state.app,
              loadingContent: true
            }
          }
        })

        await new Promise(resolver => setTimeout(resolver, 5000))

        const list = Array.from(Array(8).keys()).map((_, index) => {
          return {
            id: uuidV4(),
            name: `Condominio ${index + 1}`,
            document: `00.000.000/0000-0${index + 1}`,
            showEditForm: false,
            showUserForm: false,
            showApartmentForm: false,
            showBlockForm: false,
            showPermissionForm: false
          }
        })

        set(state => {
          return {
            app: {
              ...state.app,
              loadingContent: false,
            },
            condominium: {
              ...state.condominium,
              list: list
            }
          }
        })
      }
    },

    role: {
      ...rolesStore,

      showRoleModals: (modalForm: string, id: number) => {
        const { role: { list } } = get()

        const newDatas = list.map((data) => {
          if (id === data.id) {
            return {
              ...data,
              [modalForm]: true
            }
          }

          return data
        })

        set(state => {
          return {
            ...state,
            role: {
              ...state.role,
              list: newDatas,
            }
          }
        })
      },
      dismissRoleModals: (modalForm: string, id: number) => {
        const { role: { list } } = get()

        const newDatas = list.map((data) => {
          if (id === data.id) {
            return {
              ...data,
              [modalForm]: false
            }
          }

          return data
        })

        set(state => {
          return {
            ...state,
            role: {
              ...state.role,
              list: newDatas,
            }
          }
        })
      },
      setCreateRoleData: (data: CreateRoleData) => {
        set(state => {
          return {
            ...state,
            role: {
              ...state.role,
              create: {
                ...state.role.create,
                ...data
              }
            }
          }
        })
      },
      clearCreateRoleData: () => {
        set(state => {
          return {
            ...state,
            role: {
              ...state.role,
              create: {
                name: "",
                description: "",
              }
            }
          }
        })
      },
      createRole: async () => {
        const { role: { create } } = get()
  
        console.log(create)
  
        /*
        * 1 = get datas from store condominium
        * 2 = validate datas
        * 3 = send to API
        */
      },
      listRoles: async () => {
        set(state => {
          return {
            app: {
              ...state.app,
              loadingContent: true
            }
          }
        })

        await new Promise(resolver => setTimeout(resolver, 5000))

        const list = Array.from(Array(8).keys()).map((_, index) => {
          return {
            id: index + 1,
            name: `Role ${index + 1}`,
            showEditForm: false,
          }
        })

        set(state => {
          return {
            app: {
              ...state.app,
              loadingContent: false,
            },
            role: {
              ...state.role,
              list: list
            }
          }
        })
      },
    },


    toggleMenu: () => {
      set(state => {
        return {
          app: { 
            ...state.app,
            showedMenu: !state.app.showedMenu, 
          }
        }
      })
    },

    toggleNewRegisterDrawer: (opened: boolean) => {
      set(state => {
        return {
          app: { 
            ...state.app,
            openedDrawer: opened, 
          }
        }
      })
    },

    navigationPage: (page: number) => {
      set(state => {
        return {
          app: { 
            ...state.app,
            currentPage: page
          }
        }
      })
    },

    toggleQuestionModal: (opened: boolean) => {
      set(state => {
        return {
          app: { 
            ...state.app,
            openedQuestionModal: opened
          }
        }
      })
    }

  }
})