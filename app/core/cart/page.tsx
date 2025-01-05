"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CartItemModel } from "./cart.model";
import { useCart } from "@/redux/hooks/useCart";
import { CartItem } from "./components/cart-item";
import { Button } from "@/components/ui/button";
import { useUser } from "@/redux/hooks/useUser";
import { useRouter } from "next/router";
import { PublicRoutes } from "@/routes/routes";

export default function CartPage() {
  const { getCart } = useCart();
  const { getUser } = useUser();
  const prices = getCart().map((item) => item.price * item.amount);
  const subTotal = prices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const IVA = subTotal * 0.21;
  const total = (subTotal + IVA).toFixed(0);

  const user = getUser();
  const handlePayNow = () => {
    if (user.user.jwt === "") {
      alert("Need to login first");
    }
  };
  return (
    <div className="flex gap-2">
      <Card className="flex-1 max-w-[60%] flex flex-col gap-5 ">
        {getCart().map(
          ({ amount, id, name, price, principalPic }: CartItemModel) => (
            <CartItem
              key={id}
              id={id}
              name={name}
              price={price}
              principalPic={principalPic}
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
          <Button className="w-full" onClick={handlePayNow}>
            Pagar ahora
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
