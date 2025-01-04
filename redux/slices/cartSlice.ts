import { CartItemModel } from "@/app/core/cart/cart.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cartSlice {
  cart_id: number;
  total_pay: number;
  items: CartItemModel[];
}

const initialState: cartSlice = {
  cart_id: 1,
  total_pay: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemModel>) => {
      const exists = state.items.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeToCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    changeAmount: (
      state,
      action: PayloadAction<{ id: number; amount: number }>
    ) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, amount: action.payload.amount }
          : { ...item }
      );
    },
  },
});

export const { addToCart, removeToCart, changeAmount } = cartSlice.actions;

export default cartSlice.reducer;
