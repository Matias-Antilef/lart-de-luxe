import { useDispatch } from "react-redux";
import { addToFavorites, removeToFavorites } from "@/redux/favoritesSlice";
import { ProductCardModel } from "@/models/product.model";

export const useAddFavorite = (product: ProductCardModel) => {
  const dispatch = useDispatch();

  const handleAddToFavorite = () => {
    dispatch(addToFavorites(product));
  };

  return handleAddToFavorite;
};

export const useRemoveFavorite = (id: number) => {
  const dispatch = useDispatch();

  const handleRemoveFavorite = () => {
    dispatch(removeToFavorites(id));
  };

  return handleRemoveFavorite;
};
