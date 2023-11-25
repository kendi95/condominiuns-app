export type AlertProps = {
  duration: number //miliseconds
  message: string
  type: "SUCCESS" | "ERROR" | "INFO"
}

export type AppProps = {
  showedMenu: boolean
  openedDrawer: boolean
  loadingContent: boolean
  currentPage: number
  totalPages: number
  openedQuestionModal: boolean

  alert: {
    show: boolean
    message: string | null
    type: "SUCCESS" | "ERROR" | "INFO"
  }

  toggleMenu: () => void
  toggleNewRegisterDrawer: (opened: boolean) => void
  navigationPage: (page: number) => void
  toggleQuestionModal: (opened: boolean) => void
  showAlert: (props: AlertProps) => void
}
