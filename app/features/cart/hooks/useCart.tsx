import { useDispatch } from "react-redux";
import { CartModel } from "../cart.model";
import { addToCart, removeToCart } from "../cartSlice";

export const useAddToCart = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: CartModel) => {
    dispatch(addToCart(product));
  };

  return handleAddToCart;
};

export const useRemoveToCart = () => {
  const dispatch = useDispatch();

  const handleRemoveToCart = (id: number) => {
    dispatch(removeToCart(id));
  };

  return handleRemoveToCart;
};
