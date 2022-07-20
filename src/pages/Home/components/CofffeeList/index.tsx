import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListContainer, List } from './styles'
import { coffees } from '../../../../data/coffees'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>
      <List>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </List>
    </CoffeeListContainer>
  )
}
