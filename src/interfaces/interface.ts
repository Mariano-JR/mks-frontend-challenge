export interface IProduct {
        id: number
        name: string
        brand: string
        description: string
        photo: string
        price: string
        createdAt: Date
        updatedAt: Date
}

export interface ICardData {
        item: IProduct
        addToCart: (item: ICartItem) => void
}

export interface IDataApi {
        products: Array<IProduct>
        count: number
}

export interface ICartItem {
        item: IProduct
        count: number
}

export interface ICartItemsContext {
        items: Array<IProduct>
        totalValue: number
}