'use client'
import Image from "next/image";
import Link from "next/link";
import { FormEvent } from "react";
import { AtSign, Asterisk, ArrowRight } from "lucide-react"

import SigninBackground from '../../assets/signin-background.jpg'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

export default function Signin() {

  function handleSignin(event: FormEvent) {
    event.preventDefault();
    alert("acessou")
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Image 
        src={SigninBackground}
        alt="Signin Background"
        fill
        style={{
          opacity: 0.8,
        }}
      />

      <div className="bg-zinc-800/90 z-50 w-[70vh] px-14 py-16 rounded-xl flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl text-zinc-300 font-bold mb-10">Acesso a plataforma</h1> 

        <form onSubmit={handleSignin} className="w-full flex flex-col items-center justify-center gap-4">
          <Input.Container>
            <Input.Icon icon={<AtSign size={18} className="text-zinc-300" />} />
            <Input.Field type="email" />
          </Input.Container>

          <Input.Container>
            <Input.Icon icon={<Asterisk size={18} className="text-zinc-300" />} />
            <Input.Field type="password" />
          </Input.Container>

          <Button.Button 
            label="Acessar" 
            size="small"
            type="submit"
            className="mt-6"
          >
            <Button.Icon icon={<ArrowRight size={18} />} />
          </Button.Button>
        </form>

        <Link href="/forgot-password" className="text-xs font-bold text-zinc-500 self-start">
          Esqueci a minha senha
        </Link>
      </div>
    </div>
  )
}