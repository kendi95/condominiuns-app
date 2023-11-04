import { FormEvent } from "react"
import { X, Check } from "lucide-react"
import { Switch } from "@headlessui/react"

import { Modal } from "@components/Modal"
import { Button } from "@components/Button"
import { Toggle } from "@components/Toggle"

type PermissionFormProps = {
  isOpen: boolean
  onClose: () => void
}

export function CondominiumPermissionForm({ isOpen, onClose }: PermissionFormProps) {
  
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <Modal.Container isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        <div className="w-full flex items-center justify-between mb-4">
          <h1 className="text-2xl text-zinc-100 font-bold">Configurações de permissões do condomínio</h1>

          <button onClick={onClose} className="w-6 h-6 flex items-center justify-center text-zinc-100">
            <X size={18} />
          </button>
        </div>

        <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
          <div className="w-full flex flex-wrap items-start gap-14">
            <div className="flex flex-col justify-center max-w-[120px] w-full">
              <h3 className="text-base text-zinc-300 font-bold">Avatar</h3>
              
              <div className="ml-4 w-[120px] flex flex-col gap-2 mt-2 text-sm text-zinc-300 font-bold">
                <Toggle title="Adicionar" />
                <Toggle title="Atualizar" />
                <Toggle title="Remover" />
              </div>
            </div>

            <div className="flex flex-col justify-center max-w-[120px] w-full">
              <h3 className="text-base text-zinc-300 font-bold">Bloco</h3>
              
              <div className="ml-4 w-[120px] flex flex-col gap-2 mt-2 text-sm text-zinc-300 font-bold">
                <Toggle title="Adicionar" />
                <Toggle title="Atualizar" />
                <Toggle title="Remover" />
                <Toggle title="Listar" />
              </div>
            </div>

            <div className="flex flex-col justify-center max-w-[120px] w-full">
              <h3 className="text-base text-zinc-300 font-bold">Apt.</h3>
              
              <div className="ml-4 w-[120px] flex flex-col gap-2 mt-2 text-sm text-zinc-300 font-bold">
                <Toggle title="Adicionar" />
                <Toggle title="Atualizar" />
                <Toggle title="Remover" />
                <Toggle title="Listar" />
              </div>
            </div>

            <div className="flex flex-col justify-center max-w-[120px] w-full">
              <h3 className="text-base text-zinc-300 font-bold">Usuários</h3>
              
              <div className="ml-4 w-[120px] flex flex-col gap-2 mt-2 text-sm text-zinc-300 font-bold">
                <Toggle title="Adicionar" />
                <Toggle title="Atualizar" />
                <Toggle title="Remover" />
                <Toggle title="Listar" />
              </div>
            </div>

            <div className="flex flex-col justify-center max-w-[120px] w-full">
              <h3 className="text-base text-zinc-300 font-bold">Dados</h3>
              
              <div className="ml-4 w-[120px] flex flex-col gap-2 mt-2 text-sm text-zinc-300 font-bold">
                <Toggle title="Adicionar" />
                <Toggle title="Atualizar" />
              </div>
            </div>
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