import { HeartCrackIcon, HeartIcon } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { PublicRoutes } from "@/routes/routes";
import { ProductCardModel } from "@/models/product.model";
import { Button } from "../ui/button";
import { useCart } from "@/context/cart.store";
import { useFavorite } from "@/context/favorite.store";

function ProductCard({
  id,
  name,
  principalPic,
  price,
  stock,
  categories,
  favorite,
  removeFavorite,
  className,
}: ProductCardModel & {
  favorite?: boolean;
  removeFavorite?: () => void;
  className?: string;
}) {
  const addToCart = useCart((state) => state.addToCart);
  const addToFavorites = useFavorite((state) => state.addToFavorites);
  const removeToFavorites = useFavorite((state) => state.removeToFavorites);

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      amount: 1,
      price,
      principalPic,
    });
  };

  const handleAddToFavorite = () => {
    addToFavorites({
      id,
      name,
      price,
      principalPic,
      categories,
    });
  };

  const handleRemoveToFavorite = () => {
    removeToFavorites(id);
  };

  return (
    <Card className="relative">
      <Link href={`${PublicRoutes.PRODUCT_INFO}/${id}`}>
        <div className={`${className} relative w-full h-[60vh]`}>
          <Image
            src={"/js.png"}
            alt={name}
            fill
            className="object-cover h-full w-full rounded-lg"
            sizes=""
          />
        </div>
        <CardHeader className="p-3">
          <CardTitle> {name} </CardTitle>
          <div>
            <CardDescription className="text-xl font-semibold text-black">
              $ {price}
            </CardDescription>
          </div>
        </CardHeader>
      </Link>
      <CardDescription className="flex">
        <Button onClick={handleAddToCart} className="flex-1 text-lg py-6">
          Añadir a la bolsa
        </Button>
      </CardDescription>
      {favorite ? (
        <HeartCrackIcon
          onClick={handleRemoveToFavorite}
          className=" hover:cursor-pointer hover:bg-slate-500 hover:stroke-red-600 stroke-red-200 fill-red-300 h-10 w-10 p-2 rounded-xl transition-colors  absolute top-5 right-5"
        />
      ) : (
        <HeartIcon
          onClick={handleAddToFavorite}
          className="hover:fill-red-400 hover:cursor-pointer hover:bg-slate-500 hover:stroke-red-400 stroke-none border-red-300  fill-red-300 h-10 w-10 p-2 rounded-xl transition-colors  absolute top-5 right-5"
        />
      )}
    </Card>
  );
}

export default ProductCard;
