import { Heading1, HeartCrack, HeartCrackIcon, HeartIcon } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { PublicRoutes } from "../routes/routes";
import { ProductCardModel } from "@/models/product.model";
import { Button } from "./ui/button";
import useFavorite from "@/app/favorites/hooks/useFavorite";
import useCart from "@/app/cart/hooks/useCart";

function ProductCard({
  id,
  name,
  principalPic,
  price,
  stock,
  categories,
  favorite,
  removeFavorite,
}: ProductCardModel & { favorite?: boolean; removeFavorite?: () => void }) {
  const { handleAddToCart } = useCart();
  const { handleAddToFavorite } = useFavorite();

  return (
    <Card className="relative mb-7">
      <Link href={`${PublicRoutes.PRODUCT_INFO}/${id}`}>
        <div className="relative w-[500px] h-[500px] ">
          <Image
            src={"/js.png"}
            alt={name}
            fill
            className="object-cover rounded-t-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader className="p-3">
          <CardTitle> {name} </CardTitle>
          <CardDescription> $ {price} </CardDescription>
        </CardHeader>
      </Link>
      <CardDescription className="flex">
        <Button
          onClick={() =>
            handleAddToCart({
              id,
              name,
              amount: 1,
              price: price,
              price_total: 0,
              principalPic: principalPic,
            })
          }
          className="flex-1"
        >
          Añadir a la bolsa
        </Button>
      </CardDescription>
      {favorite ? (
        <HeartCrackIcon
          onClick={removeFavorite}
          className=" hover:cursor-pointer hover:bg-slate-500 hover:stroke-red-600 stroke-red-200 fill-red-300 h-10 w-10 p-2 rounded-xl transition-colors  absolute top-5 right-5"
        />
      ) : (
        <HeartIcon
          onClick={() =>
            handleAddToFavorite({
              id,
              principalPic,
              name,
              price,
              categories,
            })
          }
          className="hover:fill-red-400 hover:cursor-pointer hover:bg-slate-500 hover:stroke-red-400 stroke-none border-red-300  fill-red-300 h-10 w-10 p-2 rounded-xl transition-colors  absolute top-5 right-5"
        />
      )}
    </Card>
  );
}

export default ProductCard;
