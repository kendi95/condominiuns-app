import { ButtonHTMLAttributes } from "react"

type PageProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  page: string
  currentPage: string
}

export function Page({ page, currentPage, ...rest }: PageProps) {
  return (
    <button 
      {...rest}
      className={`${page === currentPage ? "bg-zinc-600" : "bg-zinc-700"} flex items-center justify-center w-9 h-9 rounded-full text-zinc-100 hover:bg-zinc-600 transition duration-200 ease-in-out`}
    >
      {page}
    </button>
  )
}