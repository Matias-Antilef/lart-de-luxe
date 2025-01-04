"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/ui/confirm-modal";
import { useState } from "react";
import { CartItemModel } from "../cart.model";
import { useCart } from "@/redux/hooks/useCart";
export function CartItem({
  id,
  name,
  price,
  principalPic,
  amount,
}: CartItemModel) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { handleAddAmount, handleReduceAmmount, handleRemoveToCart } =
    useCart();

  const handleConfirm = () => {
    handleRemoveToCart(id);
    setIsModalOpen(false);
  };

  return (
    <>
      {setIsModalOpen && (
        <ConfirmModal
          title="Are you sure?"
          description="This action cannot be undone. Are you sure you want to proceed?"
          onConfirm={handleConfirm}
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
      <Card className="w-full overflow-hidden ">
        <CardContent className="p-0">
          <div className="flex items-center">
            <div className="relative h-32 w-32 flex-shrink-0">
              <Image
                src={principalPic}
                alt={name}
                fill
                priority
                sizes="(max-width: 8rem) 100vw, (max-width: 8rem) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col  p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold line-clamp-2">{name}</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-destructive/90 hover:text-destructive hover:bg-destructive/10 "
                  onClick={() => handleRemoveToCart(id)}
                >
                  <Trash2Icon className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex justify-between items-end mt-auto">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">${price} each</p>
                  <p className="text-sm font-medium">
                    Total: ${price * amount}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Reduce amount"
                    onClick={() =>
                      amount > 1
                        ? handleReduceAmmount(id, amount - 1)
                        : setIsModalOpen(true)
                    }
                  >
                    <MinusIcon className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center text-lg font-semibold">
                    {amount}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Add amount"
                    onClick={() => handleAddAmount(id, amount + 1)}
                  >
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
