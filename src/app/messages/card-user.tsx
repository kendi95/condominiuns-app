import Image from "next/image"

type CardUserProps = {
  name: string
  sortMessage: string
}

export function CardUser({ name, sortMessage }: CardUserProps) {
  return (
    <button className="w-full flex items-center px-4 py-2 gap-2 text-zinc-200 hover:bg-zinc-600 transition duration-200 ease-in-out">
      <Image 
        alt="Image of user"
        src="https://github.com/kendi95.png"
        width={40}
        height={40}
        className="rounded-full"
      />

      <div className="flex flex-col items-start">
        {name}
        <p className="text-xs text-zinc-400 line-clamp-1">
          {sortMessage}
        </p>
      </div>
    </button>
  )
}