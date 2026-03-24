import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice'
import registrationReducer from './features/registration/registrationSlice'
import cartReducer from './features/cart/usersCartSlice'
import authReducer from './features/auth/authSlice'
import productReducer from './features/product/productSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        registration: registrationReducer,
        userCart: cartReducer,
        auth: authReducer,
        products: productReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch