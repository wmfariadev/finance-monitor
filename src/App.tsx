import { useState, useEffect } from "react"

import { Container, Header, HeaderText, Body } from "./App.styles"
import { TableArea } from "./components/TableArea"

import { Item } from "./types/Item"
import { items } from "./data/items"
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter"
import { InfoArea } from "./components/InfoArea"
import { categories } from "./data/categories"
import { InputArea } from "./components/InputArea"


const App = () => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)


  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  useEffect(() => {
    let income = 0
    let expense = 0

    filteredList.filter(item => !categories[item.category].expense).forEach(item => income += item.value)
    filteredList.filter(item => categories[item.category].expense).forEach(item => expense += item.value)

    setIncome(income)
    setExpense(expense)

  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  const handleAddItem = (item: Item) => {
    setList([...list, item])
  }

  return (
    <Container>

      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>

      <Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        ></InfoArea>

        <InputArea onAdd={handleAddItem} currentMonth={currentMonth} />

        <TableArea list={filteredList} />
      </Body>

    </Container>
  );
}

export default App