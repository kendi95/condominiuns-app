export function formatDateToTime(date: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit"
  }).format(date)
}