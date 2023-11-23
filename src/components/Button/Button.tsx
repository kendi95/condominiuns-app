import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: "primary" | "secondary" | "error"
  size?: "normal" | "small"
}

export function Button({ 
  label, 
  className, 
  children, 
  variant = "primary", 
  size = "normal",
  ...rest 
}: ButtonProps) {
  return (
    <button 
      {...rest} 
      className={`
        ${className} 
        ${variant === "primary" ? "bg-green-600" : "transparent"} 
        ${variant === "secondary" ? "border border-zinc-400" : "border-0"}
        ${variant === "error" ? "bg-red-600" : "transparent"}
        ${variant === "error" ? "hover:bg-red-800" : "transparent"}
        ${variant === "primary" ? "hover:bg-green-700" : "hover:bg-zinc-600"}
        ${size === "normal" ? "h-14" : "h-12"}
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
      {label}
      {children && children}
    </button>
  )
}