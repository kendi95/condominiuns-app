import { ElementType, Fragment, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { ChevronDown, Check } from "lucide-react"

export interface Data {
  value: string
  name: string
}

type SelectProps = {
  icon?: ElementType
  datas: Data[]
  className?: string
}

export function Select({ icon: Icon, datas, className }: SelectProps) {
  const [selected, setSelected] = useState<Data>(datas[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Listbox.Button 
        className="flex items-center justify-between w-full gap-4 text-zinc-300"
      >
        <div className="flex items-center justify-center gap-2">
          {Icon && <Icon size={18} />}
          <span className="text-base text-zinc-100 font-bold">{selected.name}</span>
        </div>

        <ChevronDown size={18} />
      </Listbox.Button>

      <Transition
        as={Fragment}
        leave="transition-all ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className={`${className} absolute flex flex-col mt-32 max-h-40 overflow-auto rounded-lg bg-zinc-700 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm`}>
          {datas.map((data) => (
            <Listbox.Option 
              key={data.value}
              value={data} 
              className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-zinc-600 ${data.value === selected.value && "bg-zinc-600"}`}
            >
              <span className="text-base text-zinc-100">{data.name}</span>
              {data.value === selected.value && (
                <Check size={18} className="text-green-500" />
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  )
}