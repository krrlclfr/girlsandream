import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cartItems {
    productCode: string
    productColor: string
    productName: string
    productImage: string
    productPrice: number
    size: string
    quantity: number
}

interface cartState {
    cartItems: cartItems[],
    grandTotal: number,
}


const initialState: cartState = {
    cartItems: [],
    grandTotal: 0
}

const userCartSlice = createSlice({
    name: 'userCart',
    initialState,
    reducers: {
        addToCartUser: (state, action: PayloadAction<cartItems>) => {
            state.cartItems.push(action.payload)
            state.grandTotal = state.cartItems.reduce((sum, item) => sum + item.productPrice * item.quantity, 0)
        },
        removeItemCart: (state, action: PayloadAction<any>) => {
            state.cartItems.splice(action.payload, 1)
            state.grandTotal = state.cartItems.reduce((sum, item) => sum + item.productPrice * item.quantity, 0)
        },
    }

})

export const { addToCartUser, removeItemCart } = userCartSlice.actions
export default userCartSlice.reducer

