'use client'

import Image from "next/image";
import Link from "next/link";
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from "next/navigation";
import { AtSign, Asterisk, ArrowRight } from "lucide-react"

import SigninBackground from '../../assets/signin-background.jpg'

import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Alert } from "@components/Alert";

import { useSession } from "@hooks/useSession";
import { useApp } from "@hooks/useApp";

type Data = {
  email: string
  password: string
}

export default function Signin() {
  const { push } = useRouter();
  const { 
    handleSubmit, 
    control,
    formState: { errors, isSubmitting } 
  } = useForm<Data>()
  const { signin } = useSession()
  const { showAlert } = useApp()

  const errorEmail = errors.email?.type === "required"  ? true : false
  const errorPassword = errors.password?.type === "required" || errors.password?.type === "minLength"  ? true : false

  async function handleSignin(data: Data) {
    try {
      await signin(data)

      push("/dashboard")
    } catch (error) {
      if (error instanceof Error) {
        showAlert({
          duration: 4000,
          message: error?.message,
          type: "ERROR"
        })
      }
    }
  }

  return (
    <main className="flex items-center justify-center h-screen">
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

        <form onSubmit={handleSubmit(handleSignin)} className="w-full flex flex-col items-center justify-center gap-4">
          <Controller 
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input.Container 
                className="w-full"
                error={errorEmail}
                errorMessage="E-mail obrigatório!"
              >
                <Input.Icon icon={AtSign} />
                <Input.Field type="email" {...field} />
              </Input.Container>
            )}
          />

          <Controller 
            name="password"
            control={control}
            rules={{ required: true, minLength: 6 }}
            render={({ field }) => (
              <Input.Container 
                className="w-full"
                error={errorPassword}
                errorMessage={
                  errors.password?.type === "required" 
                    ? "Senha obrigatória." 
                    : "Senha mínimo de 6 caracteres."
                }
              >
                <Input.Icon icon={Asterisk} />
                <Input.Field type="password" {...field} />
              </Input.Container>
            )}
          />

          <Button.Button 
            label="Acessar" 
            size="small"
            type="submit"
            className="mt-6"
            loading={isSubmitting}
          >
            <Button.Icon icon={ArrowRight} />
          </Button.Button>
        </form>

        <Link href="/forgot-password" className="text-xs font-bold text-zinc-500 self-start">
          Esqueci a minha senha
        </Link>
      </div>

      <Alert />
    </main>
  )
}