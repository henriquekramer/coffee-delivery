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

  h3 {
    font: 700 1.25rem/1.625rem 'Baloo 2', cursive;
    color: ${(props) => props.theme['gray-800']};
  }

  > p {
    font-size: 0.875rem;
    line-height: 1.15rem;
    color: ${(props) => props.theme['gray-600']};
    margin-top: 0.5rem;
    text-align: center;
  }
`

export const CoffeeTags = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;

  h5 {
    background: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-500']};
    font-size: 0.625rem;
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }
`

export const CoffeeOrderInfos = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;

  p {
    font-size: 0.875rem;
    margin-right: 1rem;

    span {
      font: 800 1.5rem/2rem 'Baloo 2', cursive;
    }
  }

  div {
    background: ${(props) => props.theme['gray-400']};
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    padding: 0.75rem;
    border-radius: 6px;
    gap: 0.25rem;
    line-height: 100%;

    button {
      line-height: 100%;
      border: none;
      background: none;
      color: ${(props) => props.theme['purple-500']};
      cursor: pointer;
    }
  }

  > button {
    padding: 0.5rem;
    background: ${(props) => props.theme['purple-800']};
    border: none;
    cursor: pointer;
    border-radius: 6px;
    transition: 0.2s;
    line-height: 100%;

    svg {
      color: ${(props) => props.theme['gray-100']};
    }

    &:hover {
      filter: brightness(1.25);
    }
  }
`
