import styled from 'styled-components'

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

interface IconsContainerProps {
  iconBg: string
}

export const IconContainer = styled.div<IconsContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${(props) => props.iconBg};
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  align-items: center;
  justify-content: center;
`