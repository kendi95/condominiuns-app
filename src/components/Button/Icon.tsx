import { ElementType } from "react"

interface IconProps {
  icon: ElementType
}

export function Icon({ icon: Icon }: IconProps) {
  return (
    <Icon size={18}  />
  )
}