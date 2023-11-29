import { useState } from "react"
import { Edit2, Trash2 } from "lucide-react"

import { Table } from "@components/Table"
import { Pagination } from "@components/Pagination"

import { useUser } from "@hooks/useUser"
import { useApp } from "@hooks/useApp"

import { UserEditForm } from "./update-form"
import { UserDeleteForm } from "./delete-form"

const fields = [
  { name: "Nome" },
  { name: "E-mail" },
  { name: "Papel" },
  { name: "#" },
]

export function UserTable() {
  const [idUser, setIdUser] = useState('')
  const { 
    list, 
    showUserModals, 
    dismissUserModals 
  } = useUser()
  const { loadingContent } = useApp()

  function handleShowModal(modalForm: string, id: string) {
    showUserModals(modalForm, id)
    setIdUser(id)
  }

  function handleHideModal(modalForm: string, id: string) {
    dismissUserModals(modalForm, id)
    setIdUser('')
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
                  {data.email}
                </td>
                <td className="text-sm font-bold text-zinc-200 text-start w-full">
                  {data.roleName}
                </td>
                <td className="text-start w-full flex justify-center gap-2">
                  <Table.IconButton 
                    icon={Edit2} 
                    onClick={() => handleShowModal("showEditForm", data.id)} 
                  />
                  
                  <Table.IconButton 
                    icon={Trash2} 
                    onClick={() => handleShowModal("showDeleteForm", data.id)} 
                  />
                </td>
              </tr>

              <UserEditForm 
                isOpen={data.showEditForm}
                onClose={() => handleHideModal("showEditForm", idUser)}
              />

              <UserDeleteForm 
                isOpen={data.showDeleteForm}
                onClose={() => handleHideModal("showDeleteForm", idUser)}
              />
            </>
          ))}
        </tbody>
      </Table.Table>

      <Pagination />
    </>
  )
}