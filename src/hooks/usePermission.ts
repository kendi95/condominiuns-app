import { useAppStore } from "../zustand-store"

export function usePermission() {
  const permission = useAppStore(state => state.permission)

  return {
    ...permission
  }
}