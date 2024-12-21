"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { CartModel } from "@/app/features/cart/cart.model";
import { CartItem } from "@/app/features/cart/components/cart-item";

export default function CartPage() {
  const cart = useSelector((state: RootState) => state.cart.items);

  return (
    <div>
      {cart.map(
        ({ amount, id, name, price, price_total, principalPic }: CartModel) => (
          <CartItem
            key={id}
            id={id}
            name={name}
            price={price}
            price_total={price_total}
            principalPic={principalPic}
            amount={amount}
          />
        )
      )}
    </div>
  );
}
