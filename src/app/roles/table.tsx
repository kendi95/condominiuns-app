import { useState } from "react"
import { Edit2, ShieldPlus } from "lucide-react"

import { Table } from "@components/Table"
import { Pagination } from "@components/Pagination"

import { useRole } from "@hooks/useRole"
import { useApp } from "@hooks/useApp"

import { RoleEditForm } from "./update-form"
import { RoleIncludePermissionForm } from "./include-permission-form"

const fields = [
  { name: "Nome" },
  { name: "#" },
]

export function RoleTable() {
  const [idRole, setIdRole] = useState<number>(0)
  const { 
    list, 
    showRoleModals, 
    dismissRoleModals 
  } = useRole()
  const { loadingContent } = useApp()

  function handleShowModal(modalForm: string, id: number) {
    showRoleModals(modalForm, id)
    setIdRole(id)
  }

  function handleHideModal(modalForm: string, id: number) {
    dismissRoleModals(modalForm, id)
    setIdRole(0)
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

                  <Table.IconButton 
                    icon={ShieldPlus} 
                    onClick={() => handleShowModal("showIncludePermissionForm", data.id)} 
                  />
                </td>
              </tr>

              <RoleEditForm 
                isOpen={data.showEditForm}
                onClose={() => handleHideModal("showEditForm", idRole)}
              />

              <RoleIncludePermissionForm 
                roleName={data.name}
                isOpen={data.showIncludePermissionForm}
                onClose={() => handleHideModal("showIncludePermissionForm", idRole)}
              />
            </>
          ))}
        </tbody>
      </Table.Table>

      <Pagination />
    </>
  )
}