import { useDispatch } from "react-redux";
import { addToFavorites, removeToFavorites } from "../favoritesSlice";
import { ProductCardModel } from "@/src/models/product.model";

export const useAddFavorite = () => {
  const dispatch = useDispatch();

  const handleAddToFavorite = (product: ProductCardModel) => {
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
