import { ChangeEvent, FormEvent } from "react"
import { Check, UserCog } from "lucide-react"

import { Input } from "@components/Input"
import { Button } from "@components/Button"

import { useRole } from "@hooks/useRole"

export function RoleForm() {
  const { create, setCreateRoleData } = useRole()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  function onChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>, inputName: string) {
    setCreateRoleData({
      ...create,
      [inputName]: event.target.value 
    })
  }

  return (
    <>
      <h1 className="text-2xl text-zinc-100 font-bold">Novo Papel</h1>
      
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-[40vh]">
          <Input.Container>
            <Input.Icon icon={UserCog} />
            <Input.Field 
              placeholder="Informe o nome do papel..." 
              value={create.name}
              onChange={event => onChange(event, "name")}
            />
          </Input.Container>
          
          <Input.Container>
            <Input.TextArea 
              placeholder="Informe a descrição do papel..." 
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