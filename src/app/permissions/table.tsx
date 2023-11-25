import { useState } from "react"
import { Edit2, Trash2 } from "lucide-react"

import { Table } from "@components/Table"
import { Pagination } from "@components/Pagination"

import { usePermission } from "@hooks/usePermission"
import { useApp } from "@hooks/useApp"

// import { RoleEditForm } from "./update-form"
// import { RoleIncludePermissionForm } from "./include-permission-form"

const fields = [
  { name: "Nome" },
  { name: "#" },
]

export function PermissionTable() {
  const [idPermission, setIdPermission] = useState<number>(0)
  const { 
    list, 
    showPermissionModals, 
    dismissPermissionModals 
  } = usePermission()
  const { loadingContent } = useApp()

  function handleShowModal(modalForm: string, id: number) {
    showPermissionModals(modalForm, id)
    setIdPermission(id)
  }

  function handleHideModal(modalForm: string, id: number) {
    dismissPermissionModals(modalForm, id)
    setIdPermission(0)
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
                    icon={Trash2} 
                    onClick={() => handleShowModal("showDeleteForm", data.id)} 
                  />
                </td>
              </tr>

              {/* <RoleEditForm 
                isOpen={data.showEditForm}
                onClose={() => handleHideModal("showEditForm", idPermission)}
              />

              <RoleIncludePermissionForm 
                roleName={data.name}
                isOpen={data.showIncludePermissionForm}
                onClose={() => handleHideModal("showIncludePermissionForm", idPermission)}
              /> */}
            </>
          ))}
        </tbody>
      </Table.Table>

      <Pagination />
    </>
  )
}