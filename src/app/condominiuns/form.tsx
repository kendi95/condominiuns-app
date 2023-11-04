import { ChangeEvent, FormEvent } from "react"
import { 
  Building2, 
  FileText, 
  AtSign, 
  Phone, 
  Smartphone, 
  Check 
} from "lucide-react"

import { Input } from "@components/Input"
import { Button } from "@components/Button"

import { useCondominium } from "@hooks/useCondominium"
import { maskCNPJ } from "@utils/maskCNPJ"
import { maskPhone } from "@utils/maskPhone"

export function CondominiumForm() {
  const { create, setCreateCondominiumData } = useCondominium()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  function onChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>, inputName: string) {
    const [input1, input2] = inputName.split(".")

    if (input2 !== undefined) {
      if (input2 === "phone") {
        event.target.value = maskPhone(event.target.value, 10)
      }

      if (input2 === "cellphone") {
        event.target.value = maskPhone(event.target.value, 11)
      }

      setCreateCondominiumData({
        ...create,
        [input1]: {
          ...create.contact,
          [input2]: event.target.value
        } 
      })

      return
    }

    if (input1 === "document") {
      event.target.value = maskCNPJ(event.target.value)
    }

    setCreateCondominiumData({
      ...create,
      [input1]: event.target.value 
    })
    
  }

  return (
    <>
      <h1 className="text-2xl text-zinc-100 font-bold">Novo Condomínio</h1>
      
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <Input.Container>
            <Input.Icon icon={Building2} />
            <Input.Field 
              placeholder="Informe o nome do condomínio..." 
              value={create.name}
              onChange={event => onChange(event, "name")}
            />
          </Input.Container>

          <Input.Container>
            <Input.Icon icon={FileText} />
            <Input.Field 
              placeholder="00.000.000/0000-00" 
              value={create.document}
              onChange={event => onChange(event, "document")}
            />
          </Input.Container>

          <Input.Container>
            <Input.TextArea 
              placeholder="Informe a descrição do condomínio..." 
              value={create.description}
              onChange={event => onChange(event, "description")}
            />
          </Input.Container>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl text-zinc-100 font-bold mt-2">Contato</h3>

          <Input.Container>
            <Input.Icon icon={AtSign} />
            <Input.Field 
              placeholder="contato@exemplo.com.br" 
              value={create.contact.email}
              onChange={event => onChange(event, "contact.email")}
            />
          </Input.Container>

          <Input.Container>
            <Input.Icon icon={Phone} />
            <Input.Field 
              placeholder="(00) 0000-0000" 
              value={create.contact.phone}
              onChange={event => onChange(event, "contact.phone")}
            />
          </Input.Container>

          <Input.Container>
            <Input.Icon icon={Smartphone} />
            <Input.Field 
              placeholder="(00) 00000-0000" 
              value={create.contact.cellphone}
              onChange={event => onChange(event, "contact.cellphone")}
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