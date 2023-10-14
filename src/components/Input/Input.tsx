import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function Input({ ...rest }: InputProps) {
  return (
    <input {...rest} className="bg-transparent text-zinc-300 outline-none text-base w-full" />
  )
}