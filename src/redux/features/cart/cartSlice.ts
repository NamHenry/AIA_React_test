import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../../dataModels";

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state: CartItem[], action: PayloadAction<number>) => {
      const productInCart: (CartItem | undefined) = state.find((item) => {
        return item.productId === action.payload
      })
      if (productInCart) {
        productInCart.quantity++;

      } else {
        const newOne: CartItem = {
          productId: action.payload,
          quantity: 1
        }
        state.push(newOne);
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

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;