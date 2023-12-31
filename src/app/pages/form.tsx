import { ChangeEvent, FormEvent } from "react"
import { Check, Link } from "lucide-react"

import { Input } from "@components/Input"
import { Button } from "@components/Button"

import { usePage } from "@hooks/usePage"
import { useApp } from "@hooks/useApp"

export function PageForm() {
  const { create, setCreatePageData } = usePage()
  const { toggleNewRegisterDrawer, showAlert } = useApp()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    try {
      toggleNewRegisterDrawer(false)
      
      showAlert({
        duration: 4000,
        message: "Papel criado com sucesso!",
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
    setCreatePageData({
      ...create,
      [inputName]: event.target.value 
    })
  }

  return (
    <>
      <h1 className="text-2xl text-zinc-100 font-bold">Nova Página</h1>
      
      <form className="flex flex-col justify-between h-full" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <Input.Container>
            <Input.Icon icon={Link} />
            <Input.Field 
              placeholder="Informe a página... (ex: /dashboard)" 
              value={create.name}
              onChange={event => onChange(event, "name")}
            />
          </Input.Container>
          
          <Input.Container>
            <Input.TextArea 
              placeholder="Informe a descrição da página..." 
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