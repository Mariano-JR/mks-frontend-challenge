export const formattedPrice = (price: string) => {
    const formatedPrice = Number(price).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return formatedPrice
}