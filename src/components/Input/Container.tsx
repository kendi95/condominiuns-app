import { ReactNode } from "react"

interface InputContainerProps {
  children: ReactNode
  className?: string
  error?: boolean
  errorMessage?: string
}

export function InputContainer({ children, className, error = false, errorMessage }: InputContainerProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className={`rounded-xl bg-zinc-700 px-4 py-2 flex items-center justify-center gap-2 ${className} ${error ? "border-2 border-red-500" : "border-0"}`}>
        {children}
      </div>
      {error && (
        <span className="text-xs text-red-500 font-bold">{errorMessage}</span>
      )}
    </div>
  )
}