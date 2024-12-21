import { useDispatch } from "react-redux";
import { CartModel } from "../cart.model";
import { addToCart, changeAmount, removeToCart } from "../cartSlice";

export function useCart() {
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

  const handleAddToCart = (product: CartModel) => {
    dispatch(addToCart(product));

    return handleAddToCart;
  };

  return {
    handleAddAmount,
    handleReduceAmmount,
    handleRemoveToCart,
    handleAddToCart,
  };
}

export default useCart;
