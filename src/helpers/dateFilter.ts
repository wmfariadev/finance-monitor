import { Item } from "../types/Item"

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let [year, month] = date.split('-')
  return list.filter(item => item.date.getFullYear() === parseInt(year) && (item.date.getMonth() + 1) === parseInt(month))
}

export const formatDate = (date: Date): string => {
  let year = date.getFullYear()
  let month = (date.getMonth() + 1).toString()
  let day = date.getDate().toString()

  day = day.length < 2 ? day.padStart(2, "0") : day
  month = month.length < 2 ? month.padStart(2, "0") : month

  return `${day}/${month}/${year}`
}

export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split('-')
  let months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  return `${months[parseInt(month) - 1]} de ${year}`
}