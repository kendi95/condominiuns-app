import { TextareaHTMLAttributes } from "react"

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {}

export function TextArea({ ...rest }: TextAreaProps) {
  return (
    <textarea {...rest} className="bg-transparent text-zinc-300 outline-none text-base w-full h-[120px] max-h-[120px] overflow-y-hidden" />
  )
}