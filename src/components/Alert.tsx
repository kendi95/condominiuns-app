import { Transition } from '@headlessui/react'
import { CheckCircle, Info, XCircle, X } from 'lucide-react'

import { useApp } from '@hooks/useApp'

type AlertProps = {
  showIcon?: boolean
}

export function Alert({ showIcon = true }: AlertProps) {
  const { alert } = useApp()

  const Icon = alert.type === "SUCCESS" 
    ? CheckCircle 
    : alert.type === "INFO" 
      ? Info
      : XCircle

  const colorIcon = alert.type === "SUCCESS" 
    ? "text-green-700" 
    : alert.type === "INFO" 
      ? "text-sky-700"
      : "text-red-700"

  const bgColor = alert.type === "SUCCESS" 
      ? "bg-green-500" 
      : alert.type === "INFO" 
        ? "bg-sky-500"
        : "bg-red-500"    

  return (
    <Transition
      show={alert.show}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-all ease-in-out duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={`absolute bottom-2 right-2 rounded-xl p-2 flex items-center justify-between gap-4 min-w-max ${bgColor}`}>
        <div className='flex items-center justify-center gap-2'>
          {showIcon && <Icon size={16} className={`${colorIcon} font-bold`} />}
          <span className="text-zinc-100 font-bold">
            {alert.message}
          </span>
        </div>

        <button>
          <X size={14} />
        </button>
      </div>
    </Transition>
  )
}