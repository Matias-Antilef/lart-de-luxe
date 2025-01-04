import { useDispatch } from "react-redux";
import { FavoritesModel } from "../../app/core/favorites/favorites.model";
import {
  addToFavorites,
  removeToFavorites,
} from "@/redux/slices/favoritesSlice";

export const useFavorite = () => {
  const dispatch = useDispatch();

  const handleAddToFavorite = (product: FavoritesModel) => {
    dispatch(addToFavorites(product));
    return handleAddToFavorite;
  };

  const handleRemoveFavorite = (id: number) => {
    dispatch(removeToFavorites(id));

    return handleRemoveFavorite;
  };

  return { handleAddToFavorite, handleRemoveFavorite };
};
