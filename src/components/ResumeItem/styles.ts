import styled from "styled-components"

export const Container = styled.div`
  flex: 1;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 10px;
    text-align: left;
  }
`

export const Title = styled.div`
  text-align: center;
  font-weight: bold;
  color: #8CA1A5;
  margin-bottom: 5px;
`

export const Info = styled.div<{ color: string }>`
  text-align: center;
  font-weight: bold;
  color: ${props => props.color};
`