import { useAppStore } from "../zustand-store"

export function useApp() {
  const app = useAppStore(state => state.app)
  const toggleMenu = useAppStore(state => state.toggleMenu)
  const navigationPage = useAppStore(state => state.navigationPage)
  const toggleNewRegisterDrawer = useAppStore(state => state.toggleNewRegisterDrawer)
  const toggleQuestionModal = useAppStore(state => state.toggleQuestionModal)

  return {
    ...app,
    toggleMenu,
    navigationPage,
    toggleNewRegisterDrawer,
    toggleQuestionModal
  }
}