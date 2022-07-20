import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import coffeeTradicional from '../../../../assets/tradicional.png'
import { CoffeeCardContainer } from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={coffeeTradicional} alt="" />
      <h5>Tradicional</h5>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <div>
        <p>R$ 9,90</p>
        <div>
          <button>
            <Minus size={14} />
          </button>
          <span>1</span>
          <button>
            <Plus size={14} />
          </button>
        </div>
        <button>
          <ShoppingCartSimple size={22} weight="fill" />
        </button>
      </div>
    </CoffeeCardContainer>
  )
}
