import { categories } from '../../data/categories'
import { formatCurrencyBRL } from '../../helpers/currencyFilter'
import { formatDate } from '../../helpers/dateFilter'
import { Item } from '../../types/Item'
import { TableLine, TableColumn, Category, Value } from './styles'

type Props = {
  item: Item
}

export const TableItem = ({ item }: Props) => {
  return (
    <TableLine>
      <TableColumn>{formatDate(item.date)}</TableColumn>
      <TableColumn>
        <Category color={categories[item.category].color}>
          {categories[item.category].title}
        </Category>
      </TableColumn>
      <TableColumn>{item.title}</TableColumn>
      <TableColumn>
        <Value color={categories[item.category].expense ? '#B22727' : '#006E7F' }>
          {formatCurrencyBRL(item.value)}
        </Value>
      </TableColumn>
    </TableLine>
  )
}