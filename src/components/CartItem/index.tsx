import { motion } from "framer-motion";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import {
  CartItemStyled,
  Close,
  DivPrice,
  Img,
  Item,
  Name,
  Qtd,
  QtdControll,
} from "./CartItemStyles";
import { CartContextType } from "../../contexts/CartContext";
import { formattedPrice } from "../Card/helpers";

interface CartItemComponentProps {
  cartContext: CartContextType | undefined;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function CartItem({ cartContext }: CartItemComponentProps) {
  return (
    <CartItemStyled>
      {cartContext?.cartItems.map((item) => {
        const { id, name, photo, price } = item.item;

        return (
          <motion.li
            variants={variants}
            style={{
              display: "flex",
              listStyle: "none",
            }}
          >
            <Item key={id}>
              <Img src={photo} alt="item img" />
              <Name>{name}</Name>
              <div>
                <Qtd>Qtd:</Qtd>
                <DivPrice>
                  <QtdControll>
                    <button
                      onClick={() =>
                        item.count !== 1
                          ? cartContext.updateQuantity(id)
                          : cartContext.removeFromCart(id)
                      }
                    >
                      <FaMinus 
                        className="plusAndMinusButton"
                      />
                    </button>
                    <p> {item.count} </p>
                    <button onClick={() => cartContext.addToCart(item)}>
                      <FaPlus 
                        className="plusAndMinusButton"
                      />
                    </button>
                  </QtdControll>
                  <h3>{formattedPrice(`${Number(price) * item.count}`)}</h3>
                </DivPrice>
              </div>
            </Item>
            <Close onClick={() => cartContext.removeFromCart(id)}>
              <MdClose className="x" />
            </Close>
          </motion.li>
        );
      })}
    </CartItemStyled>
  );
}
