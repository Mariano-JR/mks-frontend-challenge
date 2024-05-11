import { LuShoppingBag } from "react-icons/lu";
import { Button, CardStyled, Description, Div, Img, Price, PriceBox, Title } from "./CardStyles";
import { ICardData } from "../../interfaces/interface";
import { formattedPrice } from "./helpers";

export default function Card({ item, addToCart }: ICardData) {
  return (
    <CardStyled>
        <Img src={ item.photo } alt="Imagem do produto" />
        <Div>
            <Title>{ item.name }</Title>
            <PriceBox>
              <Price>{ formattedPrice(item.price) }</Price>
            </PriceBox>
        </Div>
        <Description>{ item.description }</Description>
        <Button
          onClick={() => addToCart({item, count: 1})}
        > <LuShoppingBag/> COMPRAR </Button>
    </CardStyled>
  )
}