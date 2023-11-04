import { ReactNode } from "react"

import { THead } from "./THead"
import { TBodyIconButton } from "./TBodyIconButton"

type ContainerProps = {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <table className="flex flex-col w-full bg-zinc-700 rounded-xl">
      {children}
    </table>
  )
}

export const Table = {
  Table: Container,
  Head: THead,
  IconButton: TBodyIconButton,
}
