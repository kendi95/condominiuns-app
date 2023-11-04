import { ButtonHTMLAttributes } from "react"
import { Plus } from "lucide-react"


type CreateResourceButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string
}

export function CreateResourceButton({ className, title, ...rest }: CreateResourceButtonProps) {
  return (
    <button {...rest} className={`${className} text-base text-zinc-100 font-bold bg-zinc-700 h-10 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-600 transition duration-200 ease-in-out`}>
      <Plus size={18} />
      {title}
    </button>
  )
}