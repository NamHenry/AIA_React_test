import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../../dataModels";

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: CartItem[], action: PayloadAction<{ id: number, quantity?: number }>) => {
      const productInCart: (CartItem | undefined) = state.find((item) => {
        return item.productId === action.payload.id
      })
      if (!productInCart) {
        const newOne: CartItem = {
          productId: action.payload.id,
          quantity: 1
        }
        if (action.payload.quantity) {
          newOne.quantity = action.payload.quantity;
        }
        state.push(newOne);
      }
    },
    increment: (state: CartItem[], action: PayloadAction<number>) => {
      const productInCart: (CartItem | undefined) = state.find((item) => {
        return item.productId === action.payload
      })
      if (productInCart) {
        productInCart.quantity++;

      }
    },
    decrement: (state: CartItem[], action: PayloadAction<number>) => {
      const productInCart: (CartItem | undefined) = state.find((item) => {
        return item.productId === action.payload
      })
      if (productInCart) {
        if (productInCart.quantity >= 2) {
          productInCart.quantity--;
        } else {
          return state.filter((item) => {
            return item.productId != action.payload;
          });
        }
      }
    },
  }
})

export const { increment, decrement, addToCart } = cartSlice.actions;
export default cartSlice.reducer;