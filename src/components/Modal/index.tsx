import { Fragment, ReactNode } from "react"
import { Dialog, Transition } from "@headlessui/react"

import { Content } from "./Content"

type ModalContainerProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

function ModalContainer({ isOpen, onClose, children }: ModalContainerProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-90" />
        </Transition.Child>

        {children}
      </Dialog>
    </Transition>
  )
}

export const Modal = {
  Container: ModalContainer,
  Content
}