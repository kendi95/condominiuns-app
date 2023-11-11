'use client'
import ContainerLayout from "@components/ContainerLayout"
import HeaderLayout from "@components/HeaderLayout"
import { GridContainer } from "@components/GridContainer"

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