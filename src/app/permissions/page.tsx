'use client'
import { useEffect } from "react"

import ContainerLayout from "@layouts/ContainerLayout"
import HeaderLayout from "@layouts/HeaderLayout"
import { CreateResourceButton } from "@layouts/CreateResourceButton"
import { Drawer } from "@components/Drawer"

import { usePermission } from "@hooks/usePermission"
import { useApp } from "@hooks/useApp"

import { PermissionForm } from "./form"
import { PermissionTable } from "./table"


export default function Permissions() {
  const { 
    clearCreatePermissionData, 
    listPermissions
  } = usePermission()
  const { showedMenu, openedDrawer, toggleNewRegisterDrawer } = useApp()

  function handleOpenDrawer() {
    toggleNewRegisterDrawer(true)
  }

  function handleCloseDrawer() {
    toggleNewRegisterDrawer(false)
    clearCreatePermissionData()
  }

  useEffect(() => {
    listPermissions()
  }, [listPermissions])

  return (
    <HeaderLayout>
      <ContainerLayout showedMenu={showedMenu}>
        <div className="flex justify-between w-full">
          <h1 className="text-2xl text-zinc-100 font-bold">Permissões</h1>

          <CreateResourceButton 
            title="Novo Cadastro" 
            onClick={handleOpenDrawer}
          />
        </div>

        <Drawer isOpen={openedDrawer} onClose={handleCloseDrawer}>
          <PermissionForm />
        </Drawer>

        <PermissionTable />
      </ContainerLayout>
    </HeaderLayout>
  )
}