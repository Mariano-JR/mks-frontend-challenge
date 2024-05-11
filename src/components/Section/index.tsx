import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SectionStyled } from "./SectionStyles";
import CardsGrid from "../CardsGrid";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function Section() {
  const queryClient = new QueryClient();
  const cartContext = useContext(CartContext)
  if(!cartContext) throw new Error('cartContext must be used within a CartProvider')

  return (
    <SectionStyled>
      <QueryClientProvider client={queryClient}>
        <CardsGrid 
          addToCart={cartContext.addToCart}
        />
      </QueryClientProvider>
    </SectionStyled>
  );
}
