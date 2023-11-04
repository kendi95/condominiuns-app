'use client'

import ContainerLayout from "@components/ContainerLayout"
import HeaderLayout from "@components/HeaderLayout"

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