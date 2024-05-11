import { MainPageStyled } from './MainPage'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Section from '../../components/Section'
import { CartProvider } from '../../contexts/CartContext'
import CartButton from '../../components/CartButton'

export default function MainPage() {

  return (
    <CartProvider>
      <MainPageStyled>
            <Header />
            <CartButton />
            <Section />
            <Footer />
      </MainPageStyled>
    </CartProvider>
  )
}