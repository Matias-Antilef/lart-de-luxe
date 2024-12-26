"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { CartModel } from "@/app/features/cart/cart.model";
import { CartItem } from "@/app/features/cart/components/cart-item";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const cart = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="flex">
      <Card className="flex-1 max-w-[60%] ">
        {cart.map(
          ({
            amount,
            id,
            name,
            price,
            price_total,
            principalPic,
          }: CartModel) => (
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
        }
      </Card>
      <Card className=" w-[40%] max-h-fit ">
        <CardHeader>Tú carrito</CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3 my-2">
            <h3>SubTotal: $</h3>
            <h3>IVA (21%): $</h3>
            <h3>Total: $</h3>
          </div>
          <Button className="w-full">Pagar ahora</Button>
        </CardContent>
      </Card>
    </div>
  );
}
