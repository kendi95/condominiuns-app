import { ReactNode } from "react"

import { Header } from "./Header"

interface HeaderLayoutProps {
  children: ReactNode
}

export default function HeaderLayout({ children }: HeaderLayoutProps) {
  return (
    <div className="bg-zinc-800 overflow-x-hidden">
      <Header />
      {children}
    </div>
  )
}