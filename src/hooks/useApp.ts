import { useAppStore } from "../zustand-store"

export function useApp() {
  const app = useAppStore(state => state.app)

  return {
    ...app,
  }
}