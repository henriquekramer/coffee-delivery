import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 0 1rem;

  nav {
    max-width: 1120px;
    padding: 2rem 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const NavInfos = styled.div`
  display: flex;
  align-items: center;

  p {
    padding: 0.5rem;
    font-size: 0.875rem;
    background: ${(props) => props.theme['purple-100']};
    color: ${(props) => props.theme['purple-800']};
    border-radius: 6px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.25rem;
      color: ${(props) => props.theme['purple-500']};
    }
  }

  a {
    padding: 0.5rem;
    color: ${(props) => props.theme['yellow-800']};
    background: ${(props) => props.theme['yellow-100']};
    border-radius: 6px;
    margin-left: 0.75rem;
    line-height: 100%;
    position: relative;

    sup {
      position: absolute;
      top: calc(-1.25rem / 2);
      right: calc(-1.25rem / 2);
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['yellow-800']};
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 700;
    }
  }
`
