import { FormEvent } from "react"
import { Tab } from "@headlessui/react"
import { Building2, Check, FileText } from "lucide-react"

import { Input } from "@components/Input"
import { Button } from "@components/Button"

type DataFormProps = {
  onClose: () => void
}

export function DataForm({ onClose }: DataFormProps) {

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <Tab.Panel key="data-form">
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <div className="w-full flex items-center justify-between gap-4 mb-4">
          <Input.Container className="w-full">
            <Input.Icon icon={Building2} />
            <Input.Field 
              placeholder="Informe o nome do condomínio..." 
              value="Condominio 01"
              onChange={event => {}}
            />
          </Input.Container>

          <Input.Container className="w-full">
            <Input.Icon icon={FileText} />
            <Input.Field 
              placeholder="00.000.000/0000-00" 
              value="00.000.000/0000-01"
              onChange={event => {}}
            />
          </Input.Container>
        </div>

        <Input.Container>
          <Input.TextArea 
            placeholder="Informe a descrição do condomínio..." 
            value="Descrição..."
            onChange={event => {}}
          />
        </Input.Container>

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