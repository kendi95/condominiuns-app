import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

type ContentProps = {
  children: ReactNode
  className?: string
}

export function Content({ children, className }: ContentProps) {
  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className={`${className} w-full max-w-3xl transform overflow-hidden rounded-xl bg-zinc-800 p-6 shadow-xl transition-all`}>
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  )
}