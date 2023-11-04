export function maskPhone(value: string, length: number) {

  if (length === 10) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{2})/, '($1) ')
      .replace(/(\d{4})(\d{4})\d+?$/, '$1-$2')
  }

  return value
      .replace(/\D+/g, '')
      .replace(/(\d{2})/, '($1) ')
      .replace(/(\d{5})(\d{4})\d+?$/, '$1-$2')
}