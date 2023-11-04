import { FormEvent } from "react"
import { X, Check, Building2, Blocks } from "lucide-react"

import { Modal } from "@components/Modal"
import { Input } from "@components/Input"
import { Data } from "@components/Input/Select"
import { Button } from "@components/Button"

type CreateApartmentFormProps = {
  isOpen: boolean
  onClose: () => void
}

const datas = [
  {
    value: "BLOCO01",
    name: "Bloco 01"
  },
  {
    value: "BLOCO02",
    name: "Bloco 02"
  },
] as Data[]

export function CondominiumCreateApartmentForm({ isOpen, onClose }: CreateApartmentFormProps) {
  
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <Modal.Container isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        <div className="w-full flex items-center justify-between mb-4">
          <h1 className="text-2xl text-zinc-100 font-bold">Cadastro de apartamento do condomínio</h1>

          <button onClick={onClose} className="w-6 h-6 flex items-center justify-center text-zinc-100">
            <X size={18} />
          </button>
        </div>

        <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
          <div className="w-full flex items-center justify-between gap-4">
            <Input.Container className="w-[60%]">
              <Input.Icon icon={Building2} />
              <Input.Field 
                placeholder="Informe o nome do apartamento do condomínio..." 
                value="Apartamento 01"
                onChange={event => {}}
              />
            </Input.Container>
            <Input.Container className="w-[40%]">
              <Input.Select 
                className="w-[15vw]"
                datas={datas}
                icon={Blocks} 
              />
            </Input.Container>
          </div>

          <Input.Container>
            <Input.TextArea 
              placeholder="Informe a descrição do apartamento..." 
              value="Descrição..."
              onChange={event => {}}
            />
          </Input.Container>

          <div className="w-[60%] flex items-center gap-4 mt-[10%] self-end">
            <Button.Button 
              label="Fechar" 
              size="small"
              variant="secondary"
              type="button"
              onClick={onClose}
            >
            </Button.Button>

            <Button.Button 
              label="Cadastrar" 
              size="small"
              type="submit"
            >
              <Button.Icon icon={Check} />
            </Button.Button>
          </div>
        </form>
      </Modal.Content>

    </Modal.Container>
  )
}