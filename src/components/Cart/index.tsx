import { motion } from "framer-motion";
import CartItem from "../CartItem";
import { CartContextType } from "../../contexts/CartContext";
import { CartStyled, Title, Total, ItemsContainer, DoOrder } from "./CartStyles";
import { formattedPrice } from "../Card/helpers";
import { Close } from "../CartItem/CartItemStyles";
import { MdClose } from "react-icons/md";

interface CartComponentProps {
  cartContext: CartContextType | undefined
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export default function Cart({ cartContext, setIsOpen }: CartComponentProps) {
  return (
    <CartStyled>
      <Title>Carrinho de Compras</Title>
      <Close
        className="close"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <MdClose
          className="x"
        />
      </Close>
      <ItemsContainer>
        <motion.ul
          variants={variants}
          className="items"
        >
          <CartItem
            cartContext={cartContext}
          />
        </motion.ul>
      </ItemsContainer>
      <Total>
        <h2>Total:</h2>
        <h2>{formattedPrice(String(cartContext?.cartTotal))}</h2>
      </Total>
      <DoOrder>
        Finalizar Compra
      </DoOrder>
    </CartStyled>
  )
};

