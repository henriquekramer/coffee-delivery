import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { coffees } from '../../../../data/coffees'
import { formatPrice } from '../../../../utils/formatPrice'
import { CoffeeCardContainer, CoffeeOrderInfos, CoffeeTags } from './styles'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const formattedPrice = formatPrice(coffee.price)

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <CoffeeTags>
        {coffee.tags.map((tag) => (
          <h5 key={`${coffee.id}${tag}`}>{tag}</h5>
        ))}
      </CoffeeTags>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <CoffeeOrderInfos>
        <p>
          R$ <span>{formattedPrice}</span>{' '}
        </p>
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
      </CoffeeOrderInfos>
    </CoffeeCardContainer>
  )
}
