import { FavoritesModel } from "@/app/favorites/favorites.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesSlice {
  favorites: FavoritesModel[];
}

const initialState: FavoritesSlice = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<FavoritesModel>) => {
      const exists = state.favorites.some(
        (item) => item.id === action.payload.id
      );
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeToFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToFavorites, removeToFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
