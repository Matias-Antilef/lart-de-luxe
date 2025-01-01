import { useDispatch } from "react-redux";
import { FavoritesModel } from "../favorites.model";
import { addToFavorites, removeToFavorites } from "@/redux/favoritesSlice";

export const useFvorite = () => {
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
