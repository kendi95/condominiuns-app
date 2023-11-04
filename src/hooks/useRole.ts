import { useAppStore } from "../zustand-store"

export function useRole() {
  const role = useAppStore(state => state.role)

  return {
    ...role,
  }
}