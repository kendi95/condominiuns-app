import { X } from "lucide-react"

import { Modal } from "@components/Modal"
import { Button } from "@components/Button"

type QuestionModalProps = {
  content: string
  isOpen: boolean
  onClose: () => void
  onOK?: () => void
}

export function QuestionModal({ content, isOpen, onClose, onOK }: QuestionModalProps) {
  return (
    <Modal.Container isOpen={isOpen} onClose={onClose}>
      <Modal.Content className="max-w-xl">
        <div className="w-full flex flex-row-reverse">
          <button onClick={onClose} className="w-6 h-6 flex items-center justify-center text-zinc-100">
            <X size={18} />
          </button>
        </div>
        <div className="flex items-center p-6">
          <p className="text-base text-zinc-300 font-bold">
            {content}
          </p>
        </div>
        
        <div className="w-full flex items-center gap-4 mt-2 self-end">
          <Button.Button 
            label="Não" 
            size="small"
            variant="secondary"
            type="button"
            onClick={onClose}
          >
          </Button.Button>

          <Button.Button 
            label="Sim" 
            size="small"
            type="button"
            onClick={onOK}
          >
          </Button.Button>
        </div>
      </Modal.Content>
    </Modal.Container>
  )
}