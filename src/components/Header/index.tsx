import { HeaderContainer, NavInfos } from './styles'
import logoCoffeeDelivery from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>
        <NavInfos>
          <p>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </p>
          <NavLink to="/checkout">
            <ShoppingCart size={22} weight="fill" />
            <sup>3</sup>
          </NavLink>
        </NavInfos>
      </nav>
    </HeaderContainer>
  )
}
