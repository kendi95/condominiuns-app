'use client'
import { useEffect } from "react"

import ContainerLayout from "@layouts/ContainerLayout"
import HeaderLayout from "@layouts/HeaderLayout"
import { CreateResourceButton } from "@layouts/CreateResourceButton"
import { Drawer } from "@components/Drawer"

import { useUser } from "@hooks/useUser"
import { useApp } from "@hooks/useApp"

import { UserForm } from "./form"
import { UserTable } from "./table"


export default function Permissions() {
  const { 
    clearCreateUserData, 
    listUsers
  } = useUser()
  const { showedMenu, openedDrawer, toggleNewRegisterDrawer } = useApp()

  function handleOpenDrawer() {
    toggleNewRegisterDrawer(true)
  }

  function handleCloseDrawer() {
    toggleNewRegisterDrawer(false)
    clearCreateUserData()
  }

  useEffect(() => {
    listUsers()
  }, [listUsers])

  return (
    <HeaderLayout>
      <ContainerLayout showedMenu={showedMenu}>
        <div className="flex justify-between w-full">
          <h1 className="text-2xl text-zinc-100 font-bold">Usuários do sistema</h1>

          <CreateResourceButton 
            title="Novo Cadastro" 
            onClick={handleOpenDrawer}
          />
        </div>

        <Drawer isOpen={openedDrawer} onClose={handleCloseDrawer}>
          <UserForm />
        </Drawer>

        <UserTable />
      </ContainerLayout>
    </HeaderLayout>
  )
}