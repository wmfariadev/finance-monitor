import styled from "styled-components"

export const Container = styled.div`
  margin-top: -40px;
  background-color: #FFF;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`
export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

export const MonthArrow = styled.div`
  width: 40px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
  font-weight: bold;
  color: #90A1A5
`

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;

  @media only screen and (max-width: 600px){
    flex-direction: column;
    margin-top: 10px;
    text-align: left;
  }
`
