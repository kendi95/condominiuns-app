import { ReactNode } from "react"

interface InputContainerProps {
  children: ReactNode
}

export function InputContainer({ children }: InputContainerProps) {
  return (
    <div className="rounded-xl bg-zinc-700 border-0 w-full px-4 py-2 flex items-center justify-center gap-2">
      {children}
    </div>
  )
}