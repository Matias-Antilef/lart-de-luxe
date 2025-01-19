import { CartItemModel } from "@/app/core/cart/cart.model";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
type State = {
  total_pay: number;
  items: CartItemModel[];
};

type Actions = {
  addToCart: (item: CartItemModel) => void;
  removeToCart: (id: number) => void;
  reduceAmount(id: number): void;
  addAmount(id: number): void;
};

export const useCart = create<State & Actions>()(
  immer((set) => ({
    total_pay: 0,
    items: [],
    addToCart: (item) =>
      set((state) => {
        const existingItem = state.items.find(
          (idItem) => idItem.id === item.id
        );
        if (existingItem) {
          existingItem.amount += item.amount;
        } else {
          state.items.push({ ...item });
        }
      }),
    removeToCart: (id) =>
      set(
        (state) => (state.items = state.items.filter((item) => item.id !== id))
      ),

    addAmount: (id) => {
      set((state) => {
        const existingItem = state.items.find((idItem) => idItem.id === id);
        if (existingItem) {
          existingItem.amount++;
        }
      });
    },
    reduceAmount: (id) =>
      set((state) => {
        const existingItem = state.items.find((idItem) => idItem.id === id);
        if (existingItem && existingItem.amount > 1) {
          existingItem.amount--;
        }
      }),
  }))
);
