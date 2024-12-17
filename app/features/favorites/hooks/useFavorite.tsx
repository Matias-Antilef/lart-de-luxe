import { useDispatch } from "react-redux";
import { addToFavorites, removeToFavorites } from "../favoritesSlice";
import { FavoritesModel } from "../favorites.model";

export const useAddFavorite = () => {
  const dispatch = useDispatch();

  const handleAddToFavorite = (product: FavoritesModel) => {
    dispatch(addToFavorites(product));
  };

  return handleAddToFavorite;
};

export const useRemoveFavorite = () => {
  const dispatch = useDispatch();

  const handleRemoveFavorite = (id: number) => {
    dispatch(removeToFavorites(id));
  };

  return handleRemoveFavorite;
};
