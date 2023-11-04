import { useAppStore } from "../zustand-store"

export function useCondominium() {
  const condominium = useAppStore(state => state.condominium)

  return {
    ...condominium,
  }
}