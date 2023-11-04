'use client'
import { useEffect } from "react"

import ContainerLayout from "@components/ContainerLayout"
import HeaderLayout from "@components/HeaderLayout"
import { CreateResourceButton } from "@components/CreateResourceButton"
import { Drawer } from "@components/Drawer"

import { useRole } from "@hooks/useRole"

import { RoleTable } from "./table"
import { RoleForm } from "./form"
import { useAppStore } from "../../zustand-store"

export default function Roles() {
  const { 
    clearCreateRoleData, 
    listRoles 
  } = useRole()
  const { showedMenu, openedDrawer } = useAppStore(state => state.app)
  const toggleCondominiumDrawer = useAppStore(state => state.toggleCondominiumDrawer)

  function handleOpenDrawer() {
    toggleCondominiumDrawer(true)
  }

  function handleCloseDrawer() {
    toggleCondominiumDrawer(false)
    clearCreateRoleData()
  }

  useEffect(() => {
    listRoles()
  }, [listRoles])

  return (
    <HeaderLayout>
      <ContainerLayout showedMenu={showedMenu}>
        <div className="flex justify-between w-full">
          <h1 className="text-2xl text-zinc-100 font-bold">Papéis de usuário</h1>

          <CreateResourceButton 
            title="Novo Cadastro" 
            onClick={handleOpenDrawer}
          />
        </div>

        <Drawer isOpen={openedDrawer} onClose={handleCloseDrawer}>
          <RoleForm />
        </Drawer>

        <RoleTable />
      </ContainerLayout>
    </HeaderLayout>
  )
}