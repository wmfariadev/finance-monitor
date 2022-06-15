import { formatCurrentMonth } from "../../helpers/dateFilter"
import { ResumeItem } from "../ResumeItem";
import { Container, MonthArea, MonthArrow, MonthTitle, ResumeArea } from "./styles"

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {

  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split('-')
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    currentDate.setMonth(currentDate.getMonth() - 1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split('-')
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    currentDate.setMonth(currentDate.getMonth() + 1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }

  return (
    <Container>

      <MonthArea>
        <MonthArrow onClick={handlePrevMonth}>{"<"}</MonthArrow>
        <MonthTitle>{formatCurrentMonth(currentMonth)}</MonthTitle>
        <MonthArrow onClick={handleNextMonth}>{">"}</MonthArrow>
      </MonthArea>

      <ResumeArea>
        <ResumeItem title="Receita" value={income} color={"#50b4ad"} />
        <ResumeItem title="Despesa" value={expense} color={"#de787d"} />
        <ResumeItem title="Balanço" value={income - expense} color={income - expense >= 0 ? "#50b4ad" : "#de787d"} />
      </ResumeArea>

    </Container>
  )
}