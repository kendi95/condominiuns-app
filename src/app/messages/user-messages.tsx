import { KeyboardEvent, useState } from "react"
import { Clock, Power, Send } from "lucide-react"

import { Message } from "./message"

export function UserMessages() {
  const [heigthInput, setHeigthInput] = useState(40)

  function onKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter") {
      setHeigthInput(state => state += 8)
      return
    }

    if (event.key === "Backspace") {
      setHeigthInput(state => {
        if (state === 40) return state

        return state -= 8
      })
      return
    }
  }

  return (
    <div className="h-[82vh] border border-zinc-600 rounded-xl overflow-auto flex flex-col">
      <div className="px-4 py-3 bg-zinc-600 w-full flex items-center justify-between">
        <p className="text-sm flex items-center gap-1 text-zinc-100 font-bold">
          <Clock size={16} className="text-zinc-100" />
          Conversa iniciado às: 01/11/2023 - 12:00h
        </p>

        <button className="px-4 py-1 rounded-lg bg-red-600 text-sm text-zinc-100 flex items-center justify-center gap-2 hover:bg-red-700 transition duration-200 ease-in-out">
          <Power size={12} />
          Finalizar conversa
        </button>
      </div>

      <div className="flex flex-col gap-2 p-2 h-full overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-thumb-rounded-lg">
        <Message 
          message="Bom dia, tudo bom?"
          dateMessage={new Date()}
          isOwnerMessage={false}
        />

        <Message 
          message="Tudo sim e você?"
          dateMessage={new Date()}
          isOwnerMessage
        />

        <Message 
          message="O que posso te ajudar?"
          dateMessage={new Date()}
          isOwnerMessage
        />

        <Message 
          message="O que posso te ajudar?"
          dateMessage={new Date()}
          isOwnerMessage
        />

        <Message 
          message="O que posso te ajudar?"
          dateMessage={new Date()}
          isOwnerMessage
        />

        <Message 
          message="O que posso te ajudar?"
          dateMessage={new Date()}
          isOwnerMessage
        />

        <Message 
          message="O que posso te ajudar?"
          dateMessage={new Date()}
          isOwnerMessage
        />

        <Message 
          message="O que posso te ajudar?"
          dateMessage={new Date()}
          isOwnerMessage
        />

        <Message 
          message="O que posso te ajudar?"
          dateMessage={new Date()}
          isOwnerMessage
        />
      </div>

      <div className="bg-zinc-600 w-full px-4 py-3 flex items-end justify-between gap-2">
        <textarea 
          className={`py-2 px-4 rounded-lg bg-zinc-700 text-base text-zinc-100 w-full outline-none overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-thumb-rounded-lg`} 
          placeholder="Digite uma mensagem..."
          style={{
            height: heigthInput,
            maxHeight: 140
          }}
          onKeyDown={onKeyDown}
        />

        <button className="p-3 rounded-lg bg-transparent text-zinc-100 hover:bg-zinc-700 transition duration-200 ease-in-out">
          <Send size={16} />
        </button>
      </div>
    </div>
  )
}