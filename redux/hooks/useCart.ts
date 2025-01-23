import {
  addToCart,
  changeAmount,
  removeToCart,
} from "@/redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { CartItemModel } from "@/app/core/cart/cart.model";

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
