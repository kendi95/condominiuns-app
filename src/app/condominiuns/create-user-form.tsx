import { FormEvent } from "react"
import { X, User, AtSign, Check, Asterisk, UserCog } from "lucide-react"

import { Modal } from "@components/Modal"
import { Input } from "@components/Input"
import { Data } from "@components/Input/Select"
import { Button } from "@components/Button"

import { useApp } from "@hooks/useApp"

type CreateUserFormProps = {
  isOpen: boolean
  onClose: () => void
}

const datas = [
  {
    value: "ADMINISTRATOR",
    name: "Administrador do condomínio"
  },
  {
    value: "COMUM",
    name: "Comum"
  },
] as Data[]

export function CondominiumCreateUserForm({ isOpen, onClose }: CreateUserFormProps) {
  const { showAlert } = useApp()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    try {
      onClose()
      
      showAlert({
        duration: 4000,
        message: "Usuário do condomínio criado com sucesso!",
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
      <Modal.Content>
        <div className="w-full flex items-center justify-between mb-4">
          <h1 className="text-2xl text-zinc-100 font-bold">Cadastro de usuário do condomínio</h1>

          <button onClick={onClose} className="w-6 h-6 flex items-center justify-center text-zinc-100">
            <X size={18} />
          </button>
        </div>

        <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
          <div className="w-full flex items-center justify-between gap-4">
            <Input.Container className="w-full">
              <Input.Icon icon={User} />
              <Input.Field 
                placeholder="Informe o nome do usuário do condomínio..." 
                value="Alisson Kendi Kohatsu"
                onChange={event => {}}
              />
            </Input.Container>

            <Input.Container className="w-full">
              <Input.Icon icon={AtSign} />
              <Input.Field 
                placeholder="contato@exemplo.com.br" 
                value="alisson@mail.com"
                onChange={event => {}}
              />
            </Input.Container>
          </div>

          <Input.Container>
            <Input.Select 
              className="w-[93%] mt-32"
              datas={datas}
              icon={UserCog} 
              onChangeValue={() => {}}
            />
          </Input.Container>

          <div className="w-full flex items-center justify-between gap-4">
            <Input.Container className="w-full">
              <Input.Icon icon={Asterisk} />
              <Input.Field 
                placeholder="Informe senha..." 
                value="********"
                onChange={event => {}}
              />
            </Input.Container>

            <Input.Container className="w-full">
              <Input.Icon icon={Asterisk} />
              <Input.Field 
                placeholder="Confirme senha..." 
                value="********"
                onChange={event => {}}
              />
            </Input.Container>
          </div>

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