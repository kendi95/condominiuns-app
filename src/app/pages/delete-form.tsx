import { X } from "lucide-react"

import { Modal } from "@components/Modal"
import { Button } from "@components/Button"

import { useApp } from "@hooks/useApp"

type PageDeleteFormProps = {
  isOpen: boolean
  onClose: () => void
}

export function PageDeleteForm({ isOpen, onClose }: PageDeleteFormProps) {
  const { showAlert } = useApp()

  async function handleSubmit() {
    try {
      onClose()
      
      showAlert({
        duration: 4000,
        message: "Página excluído com sucesso!",
        type: "SUCCESS"
      })
    } catch (error) {
      onClose()

      if (error instanceof Error) {
        showAlert({
          duration: 4000,
          message: error.message,
          type: "ERROR"
        })
      }
    }
  }

  return (
    <Modal.Container isOpen={isOpen} onClose={onClose}>
      <Modal.Content className="w-[40%]">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-2xl text-zinc-100 font-bold">Remoção da página</h1>

          <button onClick={onClose} className="w-6 h-6 flex items-center justify-center text-zinc-100">
            <X size={18} />
          </button>
        </div>

        <div className="py-4">
          <p className="text-zinc-300">Deseja remover esta página?</p>
        </div>

        <div className="w-full flex gap-4 justify-end">
          <Button.Button 
            label="Fechar" 
            size="small"
            variant="secondary"
            type="button"
            onClick={onClose}
          >
          </Button.Button>

          <Button.Button 
            label="Deletar" 
            variant="error"
            size="small"
            type="button"
            onClick={handleSubmit}
          >
          </Button.Button>
        </div>
      </Modal.Content>

    </Modal.Container>
  )
}