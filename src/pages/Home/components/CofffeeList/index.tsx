import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListContainer, List } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>
      <List>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </List>
    </CoffeeListContainer>
  )
}
