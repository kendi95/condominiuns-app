'use client'

import ContainerLayout from "@layouts/ContainerLayout"
import HeaderLayout from "@layouts/HeaderLayout"

import { useAppStore } from "../../zustand-store"

export default function Dashboard() {
  const { showedMenu } = useAppStore(state => state.app)

  return (
    <HeaderLayout>
      <ContainerLayout showedMenu={showedMenu}>
        <h1>Principal</h1>
      </ContainerLayout>
    </HeaderLayout>
  )
}