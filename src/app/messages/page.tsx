'use client'
import { useEffect } from "react"

import ContainerLayout from "@components/ContainerLayout"
import HeaderLayout from "@components/HeaderLayout"
import { GridContainer } from "@components/GridContainer"

import { useRole } from "@hooks/useRole"

import { ListUser } from "./list-user"

import { useAppStore } from "../../zustand-store"
import { UserMessages } from "./user-messages"

export default function Messages() {
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

  // useEffect(() => {
  //   listRoles()
  // }, [listRoles])

  return (
    <HeaderLayout>
      <ContainerLayout showedMenu={showedMenu}>
        <div className="flex justify-between w-full">
          <h1 className="text-2xl text-zinc-100 font-bold">Mensagens</h1>
        </div>

        <GridContainer>
          <ListUser />

          <UserMessages />
        </GridContainer>
      </ContainerLayout>
    </HeaderLayout>
  )
}