'use client'
import { useEffect } from "react"

import ContainerLayout from "@components/ContainerLayout"
import HeaderLayout from "@components/HeaderLayout"
import { CreateResourceButton } from "@components/CreateResourceButton"
import { Drawer } from "@components/Drawer"

import { usePage } from "@hooks/usePage"
import { useApp } from "@hooks/useApp"

import { PageTable } from "./table"
import { PageForm } from "./form"

export default function Condominiuns() {
  const { 
    clearCreatePageData, 
    listPages 
  } = usePage()
  const { showedMenu, openedDrawer, toggleNewRegisterDrawer } = useApp()

  function handleOpenDrawer() {
    toggleNewRegisterDrawer(true)
  }

  function handleCloseDrawer() {
    toggleNewRegisterDrawer(false)
    clearCreatePageData()
  }

  useEffect(() => {
    listPages()
  }, [listPages])

  return (
    <HeaderLayout>
      <ContainerLayout showedMenu={showedMenu}>
        <div className="flex justify-between w-full">
          <h1 className="text-2xl text-zinc-100 font-bold">Páginas</h1>

          <CreateResourceButton 
            title="Novo Cadastro" 
            onClick={handleOpenDrawer}
          />
        </div>

        <Drawer isOpen={openedDrawer} onClose={handleCloseDrawer}>
          <PageForm />
        </Drawer>

        <PageTable />
      </ContainerLayout>
    </HeaderLayout>
  )
}