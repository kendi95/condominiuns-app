import { useAppStore } from "../zustand-store"

export function usePage() {
  const page = useAppStore(state => state.page)

  return {
    ...page
  }
}