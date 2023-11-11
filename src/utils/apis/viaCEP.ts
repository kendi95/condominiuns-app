import axios from "axios"

import { CreateOrUpdateCondominiumAddress } from "@type/condominium"

type ViaCepProps = {
  bairro: string
  cep: string
  complemento: string
  localidade: string
  logradouro: string
  uf: string
}

interface ReturnData extends Partial<CreateOrUpdateCondominiumAddress> {}

export async function queryZipCode(zipcode: string): Promise<ReturnData> {
  const [zipcode1, zipcode2] = zipcode.split("-")

  const zipCode = `${zipcode1}${zipcode2}`

  const { data } = await axios.get<ViaCepProps>(`https://viacep.com.br/ws/${zipCode}/json/`)
  
  if (data.cep === undefined) {
    return {
      address: undefined,
      zip_code: undefined,
      complement: undefined,
      city: undefined,
      neighborhood: undefined,
      province: undefined
    }
  }

  return {
    address: data.logradouro,
    zip_code: data.cep,
    complement: data.complemento,
    city: data.localidade,
    neighborhood: data.bairro,
    province: data.uf
  }
}