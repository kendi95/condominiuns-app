import { useState } from "react"
import { Tab } from "@headlessui/react"
import { X } from "lucide-react"

import { Modal } from "@components/Modal"
import { QuestionModal } from "@components/QuestionModal"

import { DataForm } from "./tabs/data-form"
import { ContactForm } from "./tabs/contact-form"
import { AddressForm } from "./tabs/address-form"

import { useApp } from "@hooks/useApp"

type CondominiumEditFormProps = {
  isOpen: boolean
  onClose: () => void
}

export function CondominiumEditForm({
  isOpen,
  onClose
}: CondominiumEditFormProps) {
  const [disabledField, setDisabledField] = useState(true)
  const { openedQuestionModal, toggleQuestionModal } = useApp()

  function handleCloseQuestionModal() {
    toggleQuestionModal(false)
  }

  function handleOK() {
    toggleQuestionModal(false)
    setDisabledField(false)
  }
  
  return (
    <Modal.Container isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        <Tab.Group>
          <div className="flex items-center justify-between w-full">
            <Tab.List className="flex w-[60%] pb-1 border-b border-zinc-400 gap-2">
              <Tab 
                key="data-form" 
                className={({ selected }) => `min-w-min text-left font-bold ${selected ? "text-zinc-100" : "text-zinc-400"}`}
              >
                Dados gerais
              </Tab>

              <Tab 
                key="contact-form" 
                className={({ selected }) => `min-w-min text-left font-bold ${selected ? "text-zinc-100" : "text-zinc-400"}`}
              >
                Dados de contato
              </Tab>

              <Tab 
                key="address-form" 
                className={({ selected }) => `min-w-min text-left font-bold ${selected ? "text-zinc-100" : "text-zinc-400"}`}
              >
                Dados de endereço
              </Tab>
            </Tab.List>

            <div className="flex flex-row-reverse">
              <button onClick={onClose} className="w-6 h-6 flex items-center justify-center text-zinc-100">
                <X size={18} />
              </button>
            </div>
          </div>

          <Tab.Panels className="mt-8">
            <DataForm onClose={onClose} />
            <ContactForm onClose={onClose} />
            <AddressForm 
              onClose={onClose} 
              disabledField={disabledField} 
              onDisabledField={setDisabledField}
            />
          </Tab.Panels>
        </Tab.Group>
      </Modal.Content>

      <QuestionModal 
        isOpen={openedQuestionModal} 
        onClose={handleCloseQuestionModal}
        onOK={handleOK}
        content="Deseja incluir os dados manualmente?"
      />
    </Modal.Container>
  )
}