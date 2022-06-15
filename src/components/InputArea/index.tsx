import { Item } from "../../types/Item";
import { Container, Button } from "./styles";

type Props = {
  onAdd: (item: Item) => void;
  currentMonth: string;
}

export const InputArea = ({ onAdd, currentMonth }: Props) => {

  const handleAddEvent = (expende: boolean) => {
    let [year, month] = currentMonth.split('-')
    onAdd({
      title: expende ? 'Nova Despesa Teste' : 'Nova Receita Teste',
      category: expende ? 'food' : 'salary',
      date: new Date(parseInt(year), (parseInt(month) - 1), Math.floor(Math.random() * 30) + 1),
      value: Math.floor(Math.random() * 500) + 1
    })
  }

  return (
    <Container>
      <Button color="#DE787D" onClick={() => handleAddEvent(true)}>Nova Despesa</Button>
      <Button color="#50B4AD" onClick={() => handleAddEvent(false)}>Nova Receita</Button>
    </Container>
  )
}