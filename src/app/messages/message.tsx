import { formatDateToTime } from "@utils/formatDateToTime"

type MessageProps = {
  message: string
  dateMessage: Date
  isOwnerMessage: boolean
}

export function Message({ message, dateMessage, isOwnerMessage }: MessageProps) {
  
  const formattedTime = formatDateToTime(dateMessage)
  
  return (
    <div className={`flex flex-col justify-center px-2 py-1 rounded-xl ${isOwnerMessage ? "bg-zinc-500" : "bg-zinc-700"} text-sm min-w-min max-w-max text-zinc-100 ${isOwnerMessage && "self-end"}`}>
      <p>{message}</p> 
      <p className="text-zinc-200 text-xs flex self-end">{formattedTime}</p>
    </div>
  )
}