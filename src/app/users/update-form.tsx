import { FormEvent } from "react"
import { X, UserCog, Check, User, AtSign } from "lucide-react"

import { Modal } from "@components/Modal"
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import { Data } from "@components/Input/Select"

import { useApp } from "@hooks/useApp"

type UserEditFormProps = {
  isOpen: boolean
  onClose: () => void
}

const datas = [
  {
    value: String(1),
    name: "Administrador"
  },
  {
    value: String(2),
    name: "Comum"
  },
] as Data[]

export function UserEditForm({ isOpen, onClose }: UserEditFormProps) {
  const { showAlert } = useApp()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    try {
      onClose()
      
      showAlert({
        duration: 4000,
        message: "Usuário atualizado com sucesso!",
        type: "SUCCESS"
      })
    } catch (error) {
      onClose()

      if (error instanceof Error) {
        showAlert({
          duration: 4000,
          message: error.message,
          type: "ERROR"
        })
      }
    }
  }
  
  return (
    <Modal.Container isOpen={isOpen} onClose={onClose}>
      <Modal.Content className="w-full">
        <div className="w-full flex items-center justify-between mb-4">
          <h1 className="text-2xl text-zinc-100 font-bold">Edição de papel</h1>

          <button onClick={onClose} className="w-6 h-6 flex items-center justify-center text-zinc-100">
            <X size={18} />
          </button>
        </div>

        <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
          <div className="flex items-center justify-between gap-4">
            <Input.Container className="w-full">
              <Input.Icon icon={User} />
              <Input.Field 
                placeholder="Informe o nome completo..." 
                value="Alisson Kendi Kohatsu"
                onChange={event => {}}
              />
            </Input.Container>

            <Input.Container className="w-full">
              <Input.Icon icon={AtSign} />
              <Input.Field 
                placeholder="Informe o email..." 
                value="alisson@mail.com"
                type="email"
                onChange={event => {}}
              />
            </Input.Container>
          </div>

          <Input.Container>
            <Input.Select 
              className="w-[94%] mt-32"
              datas={datas}
              icon={UserCog}
              onChangeValue={value => {}} 
            />
          </Input.Container>

          <div className="w-[60%] flex gap-4 mt-[10%] self-end">
            <Button.Button 
              label="Fechar" 
              size="small"
              variant="secondary"
              type="button"
              onClick={onClose}
            >
            </Button.Button>

            <Button.Button 
              label="Salvar" 
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