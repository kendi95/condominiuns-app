'use client'
import { useEffect } from "react"

import ContainerLayout from "@components/ContainerLayout"
import HeaderLayout from "@components/HeaderLayout"
import { CreateResourceButton } from "@components/CreateResourceButton"
import { Drawer } from "@components/Drawer"

import { useCondominium } from "@hooks/useCondominium"
import { useApp } from "@hooks/useApp"

import { CondominiumTable } from "./table"
import { CondominiumForm } from "./form"

export default function Condominiuns() {
  const { 
    clearCreateCondominiumData, 
    listCondominiuns 
  } = useCondominium()
  const { showedMenu, openedDrawer, toggleNewRegisterDrawer } = useApp()

  function handleOpenDrawer() {
    toggleNewRegisterDrawer(true)
  }

  function handleCloseDrawer() {
    toggleNewRegisterDrawer(false)
    clearCreateCondominiumData()
  }

  useEffect(() => {
    listCondominiuns()
  }, [listCondominiuns])

  return (
    <HeaderLayout>
      <ContainerLayout showedMenu={showedMenu}>
        <div className="flex justify-between w-full">
          <h1 className="text-2xl text-zinc-100 font-bold">Condomínios</h1>

          <CreateResourceButton 
            title="Novo Cadastro" 
            onClick={handleOpenDrawer}
          />
        </div>

        <Drawer isOpen={openedDrawer} onClose={handleCloseDrawer}>
          <CondominiumForm />
        </Drawer>

        <CondominiumTable />
      </ContainerLayout>
    </HeaderLayout>
  )
}