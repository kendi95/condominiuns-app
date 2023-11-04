import { FormEvent } from "react"
import { X, User, Check } from "lucide-react"

import { Modal } from "@components/Modal"
import { Input } from "@components/Input"
import { Button } from "@components/Button"

type CreateBlockFormProps = {
  isOpen: boolean
  onClose: () => void
}

export function CondominiumCreateBlockForm({ isOpen, onClose }: CreateBlockFormProps) {
  
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <Modal.Container isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        <div className="w-full flex items-center justify-between mb-4">
          <h1 className="text-2xl text-zinc-100 font-bold">Cadastro de bloco do condomínio</h1>

          <button onClick={onClose} className="w-6 h-6 flex items-center justify-center text-zinc-100">
            <X size={18} />
          </button>
        </div>

        <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
          <Input.Container>
            <Input.Icon icon={User} />
            <Input.Field 
              placeholder="Informe o nome do bloco do condomínio..." 
              value="Bloco 01"
              onChange={event => {}}
            />
          </Input.Container>
          <Input.Container>
            <Input.TextArea 
              placeholder="Informe a descrição do bloco..." 
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