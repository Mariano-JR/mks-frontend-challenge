import { createContext, useState } from 'react';
import { ICartItem } from '../interfaces/interface';

export interface CartContextType {
  cartItems: ICartItem[];
  totalItems: () => number
  addToCart: (item: ICartItem) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number) => void;
  cartTotal: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const totalItems = (): number => {
    var total: number = 0

    cartItems.map(item => total += item.count)

    return total
  }

  const addToCart = (item: ICartItem) => {
    const hasItem = cartItems.find(product => product.item.id === item.item.id)

    if(hasItem) {
      hasItem.count++
      setCartItems([...cartItems])
      
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.item.id !== itemId));
  };

  const updateQuantity = (itemId: number) => {
    const item = cartItems.find(product => product.item.id === itemId)

    if(item) {
      item.count--
      setCartItems([...cartItems])
    }
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + Number(item.item.price) * item.count,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, totalItems, addToCart, removeFromCart, updateQuantity, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
