"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CartItemModel } from "./cart.model";
import { CartItem } from "./components/cart-item";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart.store";

export default function CartPage() {
  const cart = useCart((state) => state.items);

  const prices = cart.map((item) => item.price * item.amount);
  const subTotal = prices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const IVA = subTotal * 0.21;
  const total = (subTotal + IVA).toFixed(0);

  return (
    <div className="flex gap-2">
      <Card className="flex-1 max-w-[60%] flex flex-col gap-5">
        {cart &&
          cart.map(
            ({ amount, id, name, price, principalPic }: CartItemModel) => (
              <CartItem
                key={id}
                id={id}
                name={name}
                price={price}
                principalPic={principalPic || "/js.png"}
                amount={amount}
              />
            )
          )}
      </Card>
      <Card className=" w-[40%] max-h-fit ">
        <CardHeader>Tú carrito</CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3 my-2">
            <h3>Sub total: ${subTotal}</h3>
            <h3>IVA (21%): ${IVA.toFixed(0)}</h3>
            <h3>Total: ${total}</h3>
          </div>
          <Button className="w-full">Pagar ahora</Button>
        </CardContent>
      </Card>
    </div>
  );
}
