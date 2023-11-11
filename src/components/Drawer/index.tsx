import { KeyboardEvent, ReactNode } from "react";
import { X } from "lucide-react"

type DrawerProps = {
  isOpen: boolean
  children: ReactNode
  onClose: () => void
}

export function Drawer({ isOpen, children, onClose }: DrawerProps) {

  return (
    <main
      className={
        "fixed overflow-hidden z-10 bg-black bg-opacity-90 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-200 translate-x-0"
          : " transition-all delay-400 opacity-0 translate-x-full")
      }
    >
      <section
        className={
          "w-[25%] max-w-lg right-0 absolute bg-zinc-800 h-full shadow-xl delay-400 duration-300 ease-in-out transition-all transform " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-full max-w-lg px-8 py-4 flex flex-col space-y-2 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-800 scrollbar-thumb-rounded-lg">
          <button className="w-4 mb-2 text-base text-zinc-100 font-bold hover:text-zinc-500 transition duration-200 ease-in-out" onClick={onClose}>
            <X size={18} />
          </button>
          {children}
        </article>
      </section>
      <section
        className="w-screen h-full"
        onClick={onClose}
      ></section>
    </main>
  )
}