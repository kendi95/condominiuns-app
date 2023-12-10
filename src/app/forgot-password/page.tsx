'use client'
import Image from "next/image";
import Lottie from "lottie-react"
import { FormEvent, useState } from "react";
import { AtSign, Send, Asterisk, Check } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation";

import SigninBackground from '../../assets/signin-background.jpg'
import SendEmailAnimation from '../../assets/send-email-animation.json'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

const regexToken = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i

export default function ForgotPassword() {
  const [isSend, setIsSend] = useState(false)
  const [message, setMessage] = useState('')

  const { back, replace } = useRouter()
  const { get, has } = useSearchParams()

  const isToken = has('token')
  const token = get('token')

  function handleSendEmail(event: FormEvent) {
    event.preventDefault();
    
    setIsSend(true)

    setTimeout(() => {
      back();
    }, 3000)
  }

  function handleCreateNewPassword(event: FormEvent) {
    event.preventDefault();

    setMessage('Voce será redirecionado na tela de login dentro de 5 segundos...');

    setTimeout(() => {
      replace("/signin")
    }, 5000);
  }

  function handleBackToSignin() {
    back();
  }

  if (isToken) {
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

        <div className="bg-zinc-800/90 z-50 w-[70vh] px-14 py-12 rounded-xl flex flex-col items-center justify-center gap-4">
          {token === "" && (
            <h1 className="text-xl text-red-500 text-center font-bold">
              Não há nenhum código de token informado
            </h1> 
          )}

          {token !== "" && !regexToken.test(token!) && (
            <h1 className="text-xl text-red-500 text-center font-bold">
              Código de token não conferem!!!
            </h1> 
          )}

          {token !== "" && regexToken.test(token!) && message === "" && (
            <>
              <h1 className="text-2xl text-zinc-300 font-bold mb-6">Criar nova senha</h1> 

              <form 
                onSubmit={handleCreateNewPassword} 
                className="w-full flex flex-col items-center justify-center gap-4"
              >
                <Input.Container className="w-full">
                  <Input.Icon icon={Asterisk} />
                  <Input.Field 
                    type="password" 
                    placeholder="Digite sua nova senha..." 
                  />
                </Input.Container>

                <Input.Container className="w-full">
                  <Input.Icon icon={Asterisk} />
                  <Input.Field 
                    type="password" 
                    placeholder="Confirmar sua nova senha..." 
                  />
                </Input.Container>

                <Button.Button 
                  label="Confirmar" 
                  type="submit"
                  className="mt-8"
                  size="small"
                >
                  <Button.Icon icon={Check} />
                </Button.Button>
              </form>
            </>
          )}

          {token !== "" && regexToken.test(token!) && message !== "" && (
            <p className="text-base text-green-600 font-bold text-center">
              {message}
            </p>
          )}
        </div>
      </main>
    )
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

      {!isSend 
        ? (
          <div className="bg-zinc-800/90 z-50 w-[70vh] px-14 py-12 rounded-xl flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl text-zinc-300 font-bold">Recuperação de senha</h1> 
            <p className="text-xs text-zinc-300 text-center mb-2">
              Informe no campo abaixo o seu email da sua conta
              para que possa enviar um link.
            </p> 

            <form onSubmit={handleSendEmail} className="w-full flex flex-col items-center justify-center gap-4">
              <Input.Container className="w-full">
                <Input.Icon icon={AtSign} />
                <Input.Field 
                  type="email" 
                  placeholder="Informe o seu e-mail..." 
                />
              </Input.Container>

              <Button.Button 
                label="Enviar" 
                type="submit"
                className="mt-8"
                size="small"
              >
                <Button.Icon icon={Send} />
              </Button.Button>

              <Button.Button 
                label="Voltar" 
                variant="secondary"
                size="small"
                type="button"
                onClick={handleBackToSignin}
              >
              </Button.Button>
            </form>
          </div>
        )
        : (
          <div className="bg-zinc-800/90 z-50 w-[70vh] px-14 py-12 rounded-xl flex flex-col items-center justify-center">
            <h1 className="text-2xl text-zinc-300 font-bold text-center">
              Link enviado na sua caixa 
              de e-mail
            </h1> 

            <Lottie 
              animationData={SendEmailAnimation} 
              autoPlay 
              style={{
                width: "80%"
              }}
            />

            <p className="text-sm text-zinc-300 text-center">
              Verifique na sua caixa de e-mail um link para
              recuperar a sua senha
            </p> 
          </div>
        )
      }
    </main>
  )
}