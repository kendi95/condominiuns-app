import { ButtonHTMLAttributes, ElementType } from "react"

type TBodyIconButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ElementType
}

export function TBodyIconButton({ icon: Icon, ...rest }: TBodyIconButton) {
  return (
    <button 
      {...rest} 
      className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-600 text-zinc-100 hover:bg-zinc-500 transition duration-200 ease-in-out"
    >
      <Icon size={16} />
    </button>
  )
}