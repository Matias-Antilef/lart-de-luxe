import { useDispatch } from "react-redux";
import { FavoritesModel } from "../model/favorites.model";
import { addToFavorites, removeToFavorites } from "@/redux/favoritesSlice";

export function useFavorite() {
  const dispatch = useDispatch();

  const handleAddToFavorite = (product: FavoritesModel) => {
    dispatch(addToFavorites(product));
    return handleAddToFavorite;
  };

  const handleRemoveFavorite = (id: number) => {
    dispatch(removeToFavorites(id));

    return handleRemoveFavorite;
  };

  return {
    handleAddToFavorite,
    handleRemoveFavorite,
  };
}

export default useFavorite;
