import { CoffeeList } from './components/CofffeeList'
import { Intro } from './components/Intro'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeList />
    </HomeContainer>
  )
}
