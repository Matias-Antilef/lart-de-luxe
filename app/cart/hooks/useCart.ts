import { addToCart, changeAmount, removeToCart } from "@/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { CartItemModel } from "../cart.model";
import { RootState } from "@/redux/store";

export const useCart = () => {
  const dispatch = useDispatch();

  const handleReduceAmmount = (id: number, amount: number) => {
    dispatch(changeAmount({ id, amount }));

    return handleReduceAmmount;
  };

  const handleAddAmount = (id: number, amount: number) => {
    dispatch(changeAmount({ id, amount }));
    return handleAddAmount;
  };

  const handleRemoveToCart = (id: number) => {
    dispatch(removeToCart(id));

    return handleRemoveToCart;
  };

  const handleAddToCart = (product: CartItemModel) => {
    dispatch(addToCart(product));

    return handleAddToCart;
  };

  const getCart = () => {
    const cart = useSelector((state: RootState) => state.cart.items);

    return cart;
  };

  return {
    handleAddAmount,
    handleReduceAmmount,
    handleRemoveToCart,
    handleAddToCart,
    getCart,
  };
};
