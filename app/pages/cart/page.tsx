"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import useCart from "@/app/features/cart/hooks/useCart";

export default function CartPage() {
  const cart = useSelector((state: RootState) => state.cart.items);
  const { handleAddAmount } = useCart();

  return (
    <div>
      {cart.map(
        ({ amount, id, name, price_each, price_total, principalPic }) => (
          <Card
            className="flex items-center justify-between  max-w-[60%] border-black border-2 "
            key={id}
          >
            <CardContent className="relative h-32 w-max bg-red-500 p-0">
              {principalPic ? (
                <Image
                  src={principalPic}
                  alt={name}
                  height={100}
                  width={100}
                  className=" object-cover relative h-full w-full"
                />
              ) : (
                <div className="h-full w-full bg-gray-300 flex items-center justify-center">
                  <p className="text-center">No image</p>
                </div>
              )}
              <span className="absolute top-0 right-0 bg-slate-400 px-2 py-1 ">
                {amount}
              </span>
            </CardContent>
            <CardHeader>
              <CardTitle> {name} </CardTitle>
            </CardHeader>
            <CardFooter className="flex flex-col gap-2">
              <span> ${price_each * amount} </span>
              <div className="flex gap-2">
                <MinusIcon
                  className=" hover:bg-slate-300 transition-colors h-8 w-8 p-2 rounded-full"
                  onClick={() => handleAddAmount(id, amount - 1)}
                />
                <PlusIcon
                  className=" hover:bg-slate-300 transition-colors h-8 w-8 p-2 rounded-full "
                  onClick={() => handleAddAmount(id, amount + 1)}
                />
              </div>
            </CardFooter>
          </Card>
        )
      )}
    </div>
  );
}
