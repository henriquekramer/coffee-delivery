import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;

  nav {
    max-width: 1120px;
    padding: 2rem 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;

      p {
        padding: 0.5rem;
        font-size: 14px;
        background: ${(props) => props.theme['purple-100']};
        color: ${(props) => props.theme['purple-800']};
        border-radius: 6px;
        display: flex;
        align-items: center;

        svg {
          margin-right: 0.25rem;
        }
      }

      a {
        padding: 0.5rem;
        color: ${(props) => props.theme['yellow-800']};
        background: ${(props) => props.theme['yellow-100']};
        border-radius: 6px;
        margin-left: 0.75rem;
        line-height: 100%;
      }
    }
  }
`
