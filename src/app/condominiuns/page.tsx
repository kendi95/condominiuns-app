'use client'
import { useEffect } from "react"

import ContainerLayout from "@components/ContainerLayout"
import HeaderLayout from "@components/HeaderLayout"
import { CreateResourceButton } from "@components/CreateResourceButton"
import { Drawer } from "@components/Drawer"

import { useCondominium } from "@hooks/useCondominium"

import { CondominiumTable } from "./table"
import { CondominiumForm } from "./form"
import { useAppStore } from "../../zustand-store"

export default function Condominiuns() {
  const { 
    clearCreateCondominiumData, 
    listCondominiuns 
  } = useCondominium()
  const { showedMenu, openedDrawer } = useAppStore(state => state.app)
  const toggleCondominiumDrawer = useAppStore(state => state.toggleCondominiumDrawer)

  function handleOpenDrawer() {
    toggleCondominiumDrawer(true)
  }

  function handleCloseDrawer() {
    toggleCondominiumDrawer(false)
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