import { useAppStore } from "../zustand-store";

export function useSession() {
  const session = useAppStore(state => state.session)

  return {
    ...session
  }
}