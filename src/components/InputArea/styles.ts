import styled from "styled-components"

export const Container = styled.div`
  margin-top: 20px;
  background-color: #FFF;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
`

export const Button = styled.button<{ color: string }>`
  background-color: ${props => props.color};
  box-shadow: 0px 0px 5px #CCC;
  border: none;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  font-size: small;
  margin-right: 15px;

  &:hover {
    content: "";
    background: ${props => props.color};
    opacity: 0.7;
    transition: all 0.5s
  }
`