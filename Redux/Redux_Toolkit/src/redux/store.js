import { configureStore } from "@reduxjs/toolkit";
import AddToCart from "./slice";
import productReducer from './productSlice'

export const store = configureStore({
    reducer:{
        cart: AddToCart,
        products: productReducer
    }
})