import { FormEvent, useState } from "react"
import { X, Check, ShieldCheck } from "lucide-react"

import { Modal } from "@components/Modal"
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import { Data } from "@components/Input/MultiSelect"

import { useRole } from "@hooks/useRole"
import { useApp } from "@hooks/useApp"

type RoleIncludePermissionFormProps = {
  roleName: string
  isOpen: boolean
  onClose: () => void
}

const datas = [
  {
    value: String(1),
    name: "ACCESS_ALL"
  },
  {
    value: String(2),
    name: "CREATE_PERMISSION"
  },
  {
    value: String(3),
    name: "UPDATE_PERMISSION"
  },
] as Data[]

export function RoleIncludePermissionForm({ roleName, isOpen, onClose }: RoleIncludePermissionFormProps) {
  const [permissions, setPermissions] = useState<Data[]>([])
  const { includePermissionRole } = useRole()
  const { showAlert } = useApp()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const datas = permissions.map((permission) => Number(permission.value))

    try {
      await includePermissionRole({
        permissions: datas
      })

      onClose()
      
      showAlert({
        duration: 4000,
        message: "Permissões incluído com sucesso!",
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

  function onChangeValue(value: Data[]) {
    setPermissions(value)
  }

  function onRemovePermission(value: Data) {
    setPermissions(state => {
      const newState = state.filter((st) => st.value !== value.value)
      return newState
    })
  }
  
  return (
    <Modal.Container isOpen={isOpen} onClose={onClose}>
      <Modal.Content className="w-full">
        <div className="w-full flex items-center justify-between mb-4">
          <h1 className="text-2xl text-zinc-100 font-bold">Inclusão de permissões de {roleName}</h1>

          <button onClick={onClose} className="w-6 h-6 flex items-center justify-center text-zinc-100">
            <X size={18} />
          </button>
        </div>

        <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
          <Input.Container>
            <Input.MultiSelect 
              className="w-[53vw]"
              datas={datas}
              selectedDatas={permissions}
              icon={ShieldCheck} 
              onChangeValues={onChangeValue}
            />
          </Input.Container>

          <div className="flex items-start gap-2">
            {permissions.map((permission) => (
              <div 
                key={permission.value}
                className="py-1 px-2 flex items-center justify-center gap-1 bg-zinc-600 rounded-full min-w-min"
              >
                <span className="text-zinc-200 font-bold text-xs">{permission.name}</span>
                <button className="text-zinc-300" onClick={() => onRemovePermission(permission)}>
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
          

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