import { useAppStore } from "../zustand-store"

export function useUser() {
  const user = useAppStore(state => state.user)

  return {
    ...user
  }
}