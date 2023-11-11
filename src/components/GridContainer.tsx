import { ReactNode } from "react"

type GridContainerProps = {
  children: ReactNode
  showedMenu?: boolean
}

export function GridContainer({ children, showedMenu }: GridContainerProps) {
  return (
    <div className={`grid grid-cols-[260px_minmax(800px,_1fr)] gap-2`}>
      {children}
    </div>
  )
}