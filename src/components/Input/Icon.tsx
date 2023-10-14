import { ReactNode } from "react"

interface IconProps {
  icon: ReactNode
}

export function Icon({ icon: Icon }: IconProps) {
  return (
    <>{Icon}</>
  )
}