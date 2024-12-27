import { FavoritesModel } from "@/app/favorites/model/favorites.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesSlice {
  items: FavoritesModel[];
}

const initialState: FavoritesSlice = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<FavoritesModel>) => {
      const exists = state.items.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeToFavorites: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToFavorites, removeToFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
