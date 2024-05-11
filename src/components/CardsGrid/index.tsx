import { useQuery } from "@tanstack/react-query"
import { ICartItem, IProduct } from "../../interfaces/interface"
import Card from "../Card"
import { CardsGridStyled } from "./CardsGridStyles"

interface CardGridComponentProps {
    addToCart: (item: ICartItem) => void;
}

export default function CardGrid({addToCart}: CardGridComponentProps) {
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC').then((res) =>
            res.json(),
        ),
    })
    
    if (isPending) return 'Loading...'
    
    if (error) return 'An error has occurred: ' + error.message
    
    const { products } = data

    return (
        <CardsGridStyled>
            {products.map((product: IProduct) => {
                return <Card 
                            key={product.id}
                            item={product}
                            addToCart={addToCart}
                        />
            })}
        </CardsGridStyled>
    )    
}