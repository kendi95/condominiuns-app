import { useState } from "react"
import { Edit2 } from "lucide-react"

import { Table } from "@components/Table"
import { Pagination } from "@components/Pagination"

import { useRole } from "@hooks/useRole"
import { useApp } from "@hooks/useApp"

import { RoleEditForm } from "./update-form"

const fields = [
  { name: "Nome" },
  { name: "#" },
]

export function RoleTable() {
  const [idRole, setIdRole] = useState("")
  const { 
    list, 
    showRoleModals, 
    dismissRoleModals 
  } = useRole()
  const { loadingContent } = useApp()

  function handleShowModal(modalForm: string, id: string) {
    showRoleModals(modalForm, id)
    setIdRole(id)
  }

  function handleHideModal(modalForm: string, id: string) {
    dismissRoleModals(modalForm, id)
    setIdRole("")
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
                <td className="text-start w-full flex justify-center gap-2">
                  <Table.IconButton 
                    icon={Edit2} 
                    onClick={() => handleShowModal("showEditForm", data.id)} 
                  />
                </td>
              </tr>

              <RoleEditForm 
                isOpen={data.showEditForm}
                onClose={() => handleHideModal("showEditForm", idRole)}
              />
            </>
          ))}
        </tbody>
      </Table.Table>

      <Pagination />
    </>
  )
}