import { ChangeEvent, FormEvent } from "react"
import { Check, ShieldCheck } from "lucide-react"

import { Input } from "@components/Input"
import { Button } from "@components/Button"

import { usePermission } from "@hooks/usePermission"
import { useApp } from "@hooks/useApp"

export function PermissionForm() {
  const { create, setCreatePermissionData } = usePermission()
  const { showAlert, toggleNewRegisterDrawer } = useApp()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    try {
      toggleNewRegisterDrawer(false)
      
      showAlert({
        duration: 4000,
        message: "Permissão criado com sucesso!",
        type: "SUCCESS"
      })
    } catch (error) {
      toggleNewRegisterDrawer(false)

      if (error instanceof Error) {
        showAlert({
          duration: 4000,
          message: error.message,
          type: "ERROR"
        })
      }
    }
  }

  function onChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>, inputName: string) {
    if (inputName === "name") {
      setCreatePermissionData({
        ...create,
        [inputName]: String(event.target.value).toUpperCase() 
      })
      return
    }

    setCreatePermissionData({
      ...create,
      [inputName]: String(event.target.value)
    })
  }

  return (
    <>
      <h1 className="text-2xl text-zinc-100 font-bold">Nova Permissão</h1>
      
      <form className="flex flex-col justify-between h-full" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <Input.Container>
            <Input.Icon icon={ShieldCheck} />
            <Input.Field 
              placeholder="Informe o nome da permissão. (ex: CREATE_PERMISSION)" 
              value={create.name}
              onChange={event => onChange(event, "name")}
            />
          </Input.Container>
          
          <Input.Container>
            <Input.TextArea 
              placeholder="Informe a descrição da permissão..." 
              value={create.description}
              onChange={event => onChange(event, "description")}
            />
          </Input.Container>
        </div>

        <Button.Button label="Cadastrar" size="small" type="submit">
          <Button.Icon icon={Check} />
        </Button.Button>
      </form>
    </>
  )
}