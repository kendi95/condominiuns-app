'use client'
import ContainerLayout from "@layouts/ContainerLayout"
import HeaderLayout from "@layouts/HeaderLayout"
import { GridContainer } from "@layouts/GridContainer"

import { useApp } from "@hooks/useApp"

import { ListUser } from "./list-user"
import { UserMessages } from "./user-messages"

export default function Messages() {
  const { showedMenu } = useApp()

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