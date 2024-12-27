import { CartItemModel } from "@/app/cart/model/cart.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cartSlice {
  id: number;
  total_pay: number;
  items: CartItemModel[];
}

const initialState: cartSlice = {
  id: 0,
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
