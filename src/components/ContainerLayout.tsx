import { ReactNode } from "react"

interface ContainerLayoutProps {
  children: ReactNode
  showedMenu: boolean;
}

export default function ContainerLayout({ children, showedMenu }: ContainerLayoutProps) {
  return (
    <main className={`absolute z-10 top-14 flex ${!showedMenu ? "lg:w-[82.43vw] 2xl:w-[90.620vw]" : "lg:w-[95vw] 2xl:w-[97.620vw]"} lg:h-[91.5vh] 2xl:h-[94.1vh] bg-zinc-800 ${!showedMenu ? "ml-60" : "ml-16"} p-4 flex flex-col gap-2`}>
      {children}
    </main>
  )
}