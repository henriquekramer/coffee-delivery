import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background: ${(props) => props.theme['gray-200']};
  padding: 1.5rem;
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: -3rem 0 0.75rem;
  }

  h5 {
    background: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-500']};
    font-size: 0.625rem;
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }
`
