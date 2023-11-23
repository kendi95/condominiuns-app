import { useState } from "react"
import { Edit2, UserPlus, Building2, Blocks } from "lucide-react"

import { Table } from "@components/Table"
import { Pagination } from "@components/Pagination"

import { useCondominium } from "@hooks/useCondominium"
import { useApp } from "@hooks/useApp"

import { CondominiumEditForm } from "./update-form"
import { CondominiumCreateUserForm } from "./create-user-form"
import { CondominiumCreateBlockForm } from "./create-block-form"
import { CondominiumCreateApartmentForm } from "./create-apartment-form"

const fields = [
  { name: "Nome" },
  { name: "CNPJ" },
  { name: "#" },
]

export function CondominiumTable() {
  const [idCondominium, setIdCondominium] = useState("")
  const { 
    list, 
    showCondominiumModals, 
    dismissCondominiumModals 
  } = useCondominium()
  const { loadingContent } = useApp()

  function handleShowModal(modalForm: string, id: string) {
    showCondominiumModals(modalForm, id)
    setIdCondominium(id)
  }

  function handleHideModal(modalForm: string, id: string) {
    dismissCondominiumModals(modalForm, id)
    setIdCondominium("")
  }

  return (
    <>
      <Table.Table>
        <Table.Head fields={fields} lastFieldName="#" />

        <tbody className="flex flex-col h-[64vh] overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-800 scrollbar-thumb-rounded-lg">
          {loadingContent && (
            <div className="flex-1 flex items-center justify-center w-full">
              <span className="text-lg text-zinc-400 font-bold">Carregando...</span>
            </div>
          )}

          {!loadingContent && list.length > 0 && list.map((data) => (
            <>
              <tr className="flex p-3" key={data.id}>
                <td className="text-base font-bold text-zinc-200 text-start w-full">
                  {data.name}
                </td>
                <td className="text-base font-bold text-zinc-200 text-start w-full">
                  {data.document}
                </td>
                <td className="text-start w-full flex justify-center gap-2">
                  <Table.IconButton 
                    icon={Edit2} 
                    onClick={() => handleShowModal("showEditForm", data.id)} 
                  />
                  <Table.IconButton 
                    icon={UserPlus} 
                    onClick={() => handleShowModal("showUserForm", data.id)} 
                  />
                  <Table.IconButton 
                    icon={Blocks} 
                    onClick={() => handleShowModal("showBlockForm", data.id)} 
                  />
                  <Table.IconButton 
                    icon={Building2} 
                    onClick={() => handleShowModal("showApartmentForm", data.id)} 
                  />
                </td>
              </tr>
            
              <CondominiumEditForm 
                isOpen={data.showEditForm}
                onClose={() => handleHideModal("showEditForm", idCondominium)}
              />

              <CondominiumCreateUserForm 
                isOpen={data.showUserForm}
                onClose={() => handleHideModal("showUserForm", idCondominium)}
              />

              <CondominiumCreateBlockForm 
                isOpen={data.showBlockForm}
                onClose={() => handleHideModal("showBlockForm", idCondominium)}
              />

              <CondominiumCreateApartmentForm 
                isOpen={data.showApartmentForm}
                onClose={() => handleHideModal("showApartmentForm", idCondominium)}
              />
            </>
          ))}
        </tbody>
      </Table.Table>

      <Pagination />
    </>
  )
}