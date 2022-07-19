import { HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <a href="/">
          <img src={logoCoffeeDelivery} alt="" />
        </a>
        <div>
          <p>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </p>
          <a href="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </a>
        </div>
      </nav>
    </HeaderContainer>
  )
}
