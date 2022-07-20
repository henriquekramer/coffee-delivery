import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 2rem auto 0;
  padding: 0 1rem;

  > h1 {
    font: 800 2rem/2.675rem 'Baloo 2', cursive;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`
