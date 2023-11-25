import { InputHTMLAttributes } from "react";
import { Loader2 } from "lucide-react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  loading?: boolean
}

export function Input({ loading = false, ...rest }: InputProps) {
  return (
    <>
      <input {...rest} className={`bg-transparent text-zinc-300 outline-none text-base w-full ${rest.className}`} />
      {loading && <Loader2 size={20} className="text-zinc-300 animate-loading" />}
    </>
  )
}