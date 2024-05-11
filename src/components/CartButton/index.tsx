import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { TiShoppingCart } from "react-icons/ti";
import { motion } from "framer-motion";
import Cart from "../Cart";
import { Button, CartButtonStyled } from "./CartButtonStyled";

const variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0 at 620px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function CartButton() {
  const [isOpen, setIsOpen] = useState(false);
  const cartContext = useContext(CartContext);
  if (!cartContext)
    throw new Error("cartContext must be used within a CartProvider");

  return (
    <CartButtonStyled>
      <Button onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <TiShoppingCart /> {cartContext.totalItems()}
      </Button>
      <motion.div
        variants={variants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          background: "#0F52BA",
          zIndex: 999,
        }}
        className="cart"
      >
        <Cart cartContext={cartContext} setIsOpen={setIsOpen} />
      </motion.div>
    </CartButtonStyled>
  );
}
