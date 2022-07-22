import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { formatPrice } from '../../../../utils/formatPrice'
import { ConfirmationSectionContainer } from './styles'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatPrice(cartItemsTotal)
  const formattedDeliveryTotal = formatPrice(DELIVERY_PRICE)
  const formattedCardTotal = formatPrice(cartTotal)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formattedDeliveryTotal}</RegularText>
      </div>
      <div>
        <RegularText size="l" weight="700" color="subtitle">
          Total
        </RegularText>
        <RegularText size="l" weight="700" color="subtitle">
          R$ {formattedCardTotal}
        </RegularText>
      </div>
      <Button text="confirmar pedido" disabled={cartQuantity <= 0} />
    </ConfirmationSectionContainer>
  )
}
