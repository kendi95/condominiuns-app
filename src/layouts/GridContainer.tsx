import { ReactNode } from "react"

type GridContainerProps = {
  children: ReactNode
}

export function GridContainer({ children }: GridContainerProps) {
  return (
    <div className={`grid grid-cols-[260px_minmax(800px,_1fr)] gap-2`}>
      {children}
    </div>
  )
}