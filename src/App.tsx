import { useState, useEffect } from "react"

import { Container, Header, HeaderText, Body } from "./App.styles"
import { TableArea } from "./components/TableArea"

import { Item } from "./types/Item"
import { items } from "./data/items"
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter"


const App = () => {
  const [list] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth] = useState(getCurrentMonth())

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  return (
    <Container>

      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>

      <Body>
        {/* Area de informações */}

        {/* Area de inputs */}

        {/* Lista de itens */}
        <TableArea list={filteredList} />
      </Body>

    </Container>
  );
}

export default App