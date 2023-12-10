import { ButtonHTMLAttributes } from "react";

import { Loading } from "@components/Loading";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: "primary" | "secondary" | "error"
  size?: "normal" | "small"
  loading?: boolean
}

export function Button({ 
  label, 
  className, 
  children, 
  variant = "primary", 
  size = "normal",
  loading = false,
  ...rest 
}: ButtonProps) {

  return (
    <button 
      {...rest} 
      className={`
        ${className} 
        ${variant === "primary" && !loading ? "bg-green-600" : "transparent"} 
        ${variant === "secondary" && !loading ? "border border-zinc-400" : "border-0"}
        ${variant === "error" && !loading ? "bg-red-600" : "transparent"}

        ${variant === "primary" && loading ? "bg-green-700" : "transparent"} 
        ${variant === "secondary" && loading ? "border border-zinc-400" : "border-0"}
        ${variant === "error" && loading ? "bg-red-800" : "transparent"}
        ${
          variant === "primary" 
            ? "hover:bg-green-700" 
            : variant === "error" ? "hover:bg-red-800" : "hover:bg-zinc-600"
        }
        ${size === "normal" ? "h-14" : "h-12"}
        ${loading ? "cursor-not-allowed" : "cursor-pointer"}
        w-full 
        p-4 
        rounded-xl 
        text-zinc-100 
        font-bold 
        flex 
        items-center 
        justify-center 
        gap-2
        transition
        duration-200
        ease-in-out
      `}
    >
      {loading ? (
        <Loading size="small" />
      ) : (
        <>
          {label}
          {children}
        </>
      )}
    </button>
  )
}