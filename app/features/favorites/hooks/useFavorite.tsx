import { useDispatch } from "react-redux";
import { addToFavorites, removeToFavorites } from "../favoritesSlice";
import { FavoritesModel } from "../favorites.model";

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
