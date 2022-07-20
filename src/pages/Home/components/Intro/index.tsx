import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroInfos,
} from './styles'
import coffeeImage from '../../../../assets/coffee.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { useTheme } from 'styled-components'

export function Intro() {
  const colors = useTheme()

  return (
    <IntroContainer>
      <IntroContent>
        <IntroInfos>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <BenefitsContainer>
            <InfoWithIcon
              iconBg={colors['yellow-800']}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <InfoWithIcon
              iconBg={colors['gray-700']}
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <InfoWithIcon
              iconBg={colors['yellow-500']}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <InfoWithIcon
              iconBg={colors['purple-500']}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </BenefitsContainer>
        </IntroInfos>
        <img src={coffeeImage} alt="" />
      </IntroContent>
    </IntroContainer>
  )
}
