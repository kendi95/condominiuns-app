import { ChangeEvent, FormEvent } from "react"
import { Check, User, AtSign, Asterisk, UserCog } from "lucide-react"

import { Input } from "@components/Input"
import { Button } from "@components/Button"
import { Data } from "@components/Input/Select"

import { useApp } from "@hooks/useApp"
import { useUser } from "@hooks/useUser"

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

export function UserForm() {
  const { create, setCreateUserData } = useUser()
  const { toggleNewRegisterDrawer, showAlert } = useApp()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    try {
      toggleNewRegisterDrawer(false)
      
      showAlert({
        duration: 4000,
        message: "Usuário criado com sucesso!",
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
    setCreateUserData({
      ...create,
      [inputName]: event.target.value
    })
  }

  function onChangeValue(value: Data, inputName: string) {
    setCreateUserData({
      ...create,
      [inputName]: value
    })
  }

  return (
    <>
      <h1 className="text-2xl text-zinc-100 font-bold">Novo usuário</h1>
      
      <form className="flex flex-col justify-between h-full" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <Input.Container>
            <Input.Icon icon={User} />
            <Input.Field 
              placeholder="Informe o nome completo..." 
              value={create.name}
              onChange={event => onChange(event, "name")}
            />
          </Input.Container>

          <Input.Container>
            <Input.Icon icon={AtSign} />
            <Input.Field 
              placeholder="Informe o email..." 
              value={create.email}
              type="email"
              onChange={event => onChange(event, "email")}
            />
          </Input.Container>

          <Input.Container>
            <Input.Icon icon={Asterisk} />
            <Input.Field 
              placeholder="Informe uma senha..." 
              value={create.password}
              type="password"
              onChange={event => onChange(event, "password")}
            />
          </Input.Container>

          <span className="text-base text-zinc-100 font-bold mt-2">Papel do usuário</span>

          <Input.Container>
            <Input.Select 
              className="w-[82%] mt-36"
              datas={datas}
              icon={UserCog}
              onChangeValue={value => onChangeValue(value, "id_role")} 
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