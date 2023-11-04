import { Switch } from "@headlessui/react"
import { useState } from "react"

type ToggleProps = {
  title: string
}

export function Toggle({ title }: ToggleProps) {
  const [active, setActive] = useState(false)

  return (
    <div className="flex items-center justify-between gap-4">
      {title}
      <Switch
        checked={active}
        onChange={setActive}
        className={`inline-flex h-[18px] w-8 border-2 border-zinc-300 items-center rounded-full`}
      >
        <span
          className={`${active ? 'translate-x-4 bg-zinc-200' : 'translate-x-0 bg-zinc-500'} inline-block h-4 w-4 transform rounded-full transition`}
        />
      </Switch>
    </div>
  )
}