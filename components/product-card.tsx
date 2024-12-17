import { BadgeIcon, HeartIcon } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useAddFavorite } from "../app/features/favorites/hooks/useFavorite";
import { PublicRoutes } from "../routes/routes";
import { ProductCardModel } from "@/models/product.model";
import { useAddToCart } from "@/app/features/cart/hooks/useCart";

function ProductCard({
  id,
  name,
  principal_picture,
  price,
  stock,
  categories,
}: ProductCardModel) {
  const addFavorite = useAddFavorite();
  const addToCart = useAddToCart();

  return (
    <Card className="relative mb-7 ">
      <Link href={`/${PublicRoutes.PAGES}/${PublicRoutes.PRODUCT_INFO}/${id}`}>
        <div className="relative w-[500px] h-[500px] rounded-xl  ">
          <Image
            src={"/js.png"}
            alt={name}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader>
          <CardTitle> {name} </CardTitle>
          <CardDescription> {price} </CardDescription>
        </CardHeader>
      </Link>
      <HeartIcon
        onClick={() =>
          addFavorite({
            id,
            principal_picture,
            name,
            price,
            categories,
          })
        }
        className="hover:fill-red-400 hover:cursor-pointer hover:bg-slate-500 hover:stroke-red-400 stroke-none border-red-300  fill-red-300 h-10 w-10 p-2 rounded-xl transition-colors  absolute top-5 right-5  "
      />
      <BadgeIcon
        onClick={() =>
          addToCart({
            id,
            name,
            amount: 1,
            priceEach: price,
            priceTotal: price,
            principal_picture,
          })
        }
        className="hover:fill-red-400 hover:cursor-pointer hover:bg-slate-500 hover:stroke-red-400 stroke-none border-red-300  fill-red-300 h-10 w-10 p-2 rounded-xl transition-colors  absolute top-5 left-5  "
      />
    </Card>
  );
}

export default ProductCard;
