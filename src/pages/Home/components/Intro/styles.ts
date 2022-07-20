import styled from 'styled-components'
import introBackground from '../../../../assets/intro-background.png'

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${(props) => `url(${introBackground}) no-repeat center`};
  background-size: cover;

  img {
    height: 100%;
  }
`
export const IntroContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  padding: 5.875rem 1rem;
`
export const IntroInfos = styled.div`
  margin-right: 2rem;

  h1 {
    font: 800 3rem/3.875rem 'Baloo 2', cursive;
    color: ${(props) => props.theme['gray-900']};
  }

  > p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
    line-height: 1.625rem;
    margin-top: 1rem;
  }
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`
