import { ChangeEvent, FormEvent, useState } from "react"
import { Tab } from "@headlessui/react"
import { Binary, Check, Hash, MapPin } from "lucide-react"

import { Input } from "@components/Input"
import { Button } from "@components/Button"

import { maskZipCode } from "@utils/maskZipCode"
import { useApp } from "@hooks/useApp"
import { useCondominium } from "@hooks/useCondominium"
import { queryZipCode } from "@utils/apis/viaCEP"

type AddressFormProps = {
  onClose: () => void
  disabledField?: boolean;
  onDisabledField: (disabledField: boolean) => void
}

export function AddressForm({ 
  onClose, 
  disabledField = true, 
  onDisabledField 
}: AddressFormProps) {
  const [loading, setLoading] = useState(false)
  const { setCreateOrUpdateCondominiumAddress, address } = useCondominium()
  const { toggleQuestionModal } = useApp()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  function onChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>, inputName: string) {

    if (inputName === "zip_code") {
      event.target.value = maskZipCode(event.target.value)

      if (event.target.value.length === 9) {
        handleQueryZipCode(event.target.value)
      }
    }

    setCreateOrUpdateCondominiumAddress({
      ...address,
      [inputName]: event.target.value
    })
    
    return
  }

  async function handleQueryZipCode(zipcode: string) {
    setLoading(true)

    try {
      new Promise((resolver) => setTimeout(resolver, 3000))

      const data = await queryZipCode(zipcode)

      if (data.zip_code === "") {
        throw new Error()
      }

      onDisabledField(true)

      setCreateOrUpdateCondominiumAddress({
        ...data,
        ...address
      })
    } catch (err: any) {
      toggleQuestionModal(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Tab.Panel key="address-form">
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <div className="w-full flex items-center justify-between gap-4 mb-4">
          <Input.Container className="w-[32vw]">
            <Input.Icon icon={Binary} />
            <Input.Field 
              placeholder="CEP" 
              loading={loading}
              value={address.zip_code!}
              onChange={event => onChange(event, "zip_code")}
            />
          </Input.Container>

          <Input.Container className="w-[100vw]">
            <Input.Icon icon={MapPin} />
            <Input.Field 
              placeholder="Endereço do condomínio..." 
              value={address.address!}
              disabled={disabledField}
              onChange={event => onChange(event, "address")}
            />
          </Input.Container>

          <Input.Container className="w-[20vw]">
            <Input.Icon icon={Hash} />
            <Input.Field 
              placeholder="Número de endereço do condomínio..." 
              value={address.street_number!}
              maxLength={4}
              onChange={event => onChange(event, "street_number")}
            />
          </Input.Container>
        </div>

        <div className="w-full flex items-center justify-between gap-4 mb-4">
          <Input.Container className="w-[100vw]">
            <Input.Icon icon={MapPin} />
            <Input.Field 
              placeholder="Complemento do endereço do condomínio..." 
              value={address.complement!}
              onChange={event => onChange(event, "complement")}
            />
          </Input.Container>
          <Input.Container className="w-[100vw]">
            <Input.Icon icon={MapPin} />
            <Input.Field 
              placeholder="Bairro do endereço do condomínio..." 
              value={address.neighborhood!}
              disabled={disabledField}
              onChange={event => onChange(event, "neighborhood")}
            />
          </Input.Container>
        </div>

        <div className="w-full flex items-center justify-between gap-4 mb-4">
          <Input.Container className="w-[140vw]">
            <Input.Icon icon={MapPin} />
            <Input.Field 
              placeholder="Cidade do condomínio..." 
              value={address.city!}
              disabled={disabledField}
              onChange={event => onChange(event, "city")}
            />
          </Input.Container>
          <Input.Container className="w-[50vw]">
            <Input.Icon icon={MapPin} />
            <Input.Field 
              placeholder="Estado do condomínio..." 
              value={address.province!}
              disabled={disabledField}
              onChange={event => onChange(event, "province")}
            />
          </Input.Container>
        </div>

        <div className="w-[60%] flex items-center gap-4 mt-[12%] self-end">
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