import { ChevronRight } from "lucide-react"

export function NextPage() {
  return (
    <button className="bg-zinc-700 flex items-center justify-center w-9 h-9 rounded-full text-zinc-100 hover:bg-zinc-600 transition duration-200 ease-in-out">
      <ChevronRight size={18} />
    </button>
  )
}