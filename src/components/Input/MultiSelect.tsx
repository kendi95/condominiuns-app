import { ChangeEvent, ElementType, Fragment, useEffect, useState } from "react"
import { Transition, Combobox } from "@headlessui/react"
import { ChevronDown, Check, X } from "lucide-react"

export interface Data {
  value: string
  name: string
}

type MultiSelectProps = {
  icon?: ElementType
  datas: Data[]
  selectedDatas?: Data[]
  className?: string
  onChangeValues: (values: Data[]) => void
}

export function MultiSelect({ icon: Icon, datas, className, selectedDatas, onChangeValues }: MultiSelectProps) {
  const [selected, setSelected] = useState<Data[]>([])
  const [query, setQuery] = useState('')

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
  }

  function onChangeValue(value: any) {  // { value: string, name: string } 
    setSelected(state => {
      if (state.length > 0) {
        if (state.includes(value)) {
          const newState = state.filter(data => data !== value)

          onChangeValues([value])
          return newState
        }

        onChangeValues([...state, value])
        return [...state, value]
      }

      onChangeValues([value])
      return [value]
    })
  }

  function clearSelectedValues() {
    setSelected([])
    onChangeValues([])
  } 

  const filteredDatas = query === '' 
    ? datas 
    : datas.filter(data => data.name.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, '')))

  useEffect(() => {
    if (selectedDatas?.length === 0) {
      setSelected([])
      return
    }

    setSelected(selectedDatas!)
  }, [selectedDatas])

  return (
    <Combobox value={selected} onChange={onChangeValue}>
      <Combobox.Button 
        className="flex items-center justify-between w-full h-6 gap-4 text-zinc-300"
      >
        <div className="flex w-full items-center justify-center gap-2">
          {Icon && <Icon size={18} />}
          <Combobox.Input 
            className="bg-transparent w-full outline-none"
            onChange={onChange}
            placeholder={selected.length > 0 ? `${selected.length} selecionados` : 'Nenhum dado selecionado.'}
          />

          {selected.length > 0 && (
            <button className="text-zinc-300" onClick={clearSelectedValues}>
              <X size={18} />
            </button>
          )}
        </div>

        <ChevronDown size={18} />
      </Combobox.Button>

      <Transition
        as={Fragment}
        leave="transition-all ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Combobox.Options className={`${className} absolute w-[94%] top-32 flex flex-col max-h-40 overflow-auto rounded-xl bg-zinc-700 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm`}>
          {filteredDatas.map((data) => (
            <Combobox.Option 
              key={data.value}
              value={data} 
              className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-zinc-600 ${selected.includes(data) && "bg-zinc-600"}`}
            >
              <span className="text-base text-zinc-100">{data.name}</span>
              {selected.includes(data) && (
                <Check size={18} className="text-green-500" />
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Transition>
    </Combobox>
  )
}