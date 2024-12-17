"use client";

import { CartModel } from "@/app/features/cart/cart.model";
import { useRemoveToCart } from "@/app/features/cart/hooks/useCart";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

function CartPage() {
  const cart = useSelector((state: RootState) => state.cart.items);

  const remove = useRemoveToCart();

  return (
    <div>
      {cart.map(
        ({
          id,
          principal_picture,
          name,
          amount,
          priceEach,
          priceTotal,
        }: CartModel) => (
          <div key={id} className="m-5 bg-slate-500">
            <h1> {name} </h1>
            <h2> {priceEach} </h2>
            <h1> {priceTotal} </h1>
            <h1> {amount} </h1>

            <button onClick={() => remove(id)}>remove</button>
          </div>
        )
      )}
    </div>
  );
}
export default CartPage;
