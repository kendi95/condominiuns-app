import { ChangeEvent, FormEvent } from "react"
import { Tab } from "@headlessui/react"
import { AtSign, Check, Phone, Smartphone } from "lucide-react"

import { Input } from "@components/Input"
import { Button } from "@components/Button"

import { maskPhone } from "@utils/maskPhone"

type ContactFormProps = {
  onClose: () => void
}

export function ContactForm({ onClose }: ContactFormProps) {
  
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

      return
    }

  }

  return (
    <Tab.Panel key="contact-form">
      <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
        <Input.Container>
          <Input.Icon icon={AtSign} />
          <Input.Field 
            placeholder="Informe o email do condomínio..." 
            value="contato@example.com.br"
            type="email"
            onChange={event => {}}
          />
        </Input.Container>

        <div className="w-full flex items-center justify-between gap-4 mb-4">
          <Input.Container className="w-full">
            <Input.Icon icon={Phone} />
            <Input.Field 
              placeholder="(00) 0000-0000" 
              value="(00) 0000-0000"
              onChange={event => onChange(event, "contact.phone")}
            />
          </Input.Container>

          <Input.Container className="w-full">
            <Input.Icon icon={Smartphone} />
            <Input.Field 
              placeholder="(00) 00000-0000" 
              value="(00) 00000-0000"
              onChange={event => onChange(event, "contact.cellphone")}
            />
          </Input.Container>
        </div>

        <div className="w-[60%] flex items-center gap-4 mt-[18%] self-end">
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
    </Tab.Panel>
  )
}