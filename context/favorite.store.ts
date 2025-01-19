import { FavoritesModel } from "@/app/core/favorites/favorites.model";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  favorites: FavoritesModel[];
};

type Actions = {
  addToFavorites: (item: FavoritesModel) => void;
  removeToFavorites: (id: number) => void;
};

export const useFavorite = create<State & Actions>()(
  immer((set) => ({
    favorites: [],
    addToFavorites: (item) =>
      set((state) => {
        const existFavorite = state.favorites.some(
          (favorite) => favorite.id === item.id
        );

        if (!existFavorite) {
          state.favorites.push(item);
        }
      }),
    removeToFavorites: (id) =>
      set((state) => {
        state.favorites = state.favorites.filter((item) => item.id !== id);
      }),
  }))
);
