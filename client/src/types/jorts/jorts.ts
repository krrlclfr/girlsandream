export interface JorstItems {
    productCode: string,
    productName: string,
    productColor: string,
    productPrice: number,
    productImage: string
}

export interface UserCartItem extends JorstItems {
    quantity: number,
    size: string
}

export interface SizesType {
    value: string,
    sizeType?: string,
    available: boolean
}

export interface ProductType {
    productCode: string,
    productName: string,
    productColor: string,
    productPrice: number,
    productImage: string,
    availableSizes: {
        xs: boolean,
        s: boolean,
        m: boolean,
        l: boolean,
        xl: boolean
    },
    soldOut: boolean
}