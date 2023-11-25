'use client'
import { KeyboardEvent, useEffect } from "react"

import ContainerLayout from "@layouts/ContainerLayout"
import HeaderLayout from "@layouts/HeaderLayout"
import { CreateResourceButton } from "@layouts/CreateResourceButton"
import { Drawer } from "@components/Drawer"

import { useRole } from "@hooks/useRole"
import { useApp } from "@hooks/useApp"

import { RoleTable } from "./table"
import { RoleForm } from "./form"

export default function Roles() {
  const { 
    clearCreateRoleData, 
    listRoles 
  } = useRole()
  const { showedMenu, openedDrawer, toggleNewRegisterDrawer } = useApp()

  function handleOpenDrawer() {
    toggleNewRegisterDrawer(true)
  }

  function handleCloseDrawer() {
    toggleNewRegisterDrawer(false)
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