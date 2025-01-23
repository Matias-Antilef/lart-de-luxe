import { HeartCrackIcon, HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PublicRoutes } from "../routes/routes";
import { ProductCardModel } from "@/models/product.model";
import { useFavorite } from "../redux/hooks/useFavorite";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

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
  const { handleAddToFavorite } = useFavorite();

  return (
    <Card className="relative">
      <Link href={`${PublicRoutes.PRODUCT_INFO}/${id}`}>
        <div className={`${className} relative w-full h-[500px]`}>
          <Image
            src={"/js.png"}
            alt={name}
            fill
            className="object-cover h-full w-full rounded-lg"
            sizes=""
          />
        </div>
        <CardHeader className="p-3">
          <CardTitle className="text-xl"> {name} </CardTitle>
          <div>
            <CardDescription className="text-lg font-light">
              $ {price}
            </CardDescription>
          </div>
        </CardHeader>
      </Link>
      <CardContent className=" p-0 m-0 absolute top-2 right-2 flex  gap-1">
        {favorite ? (
          <HeartCrackIcon
            onClick={removeFavorite}
            className=" hover:cursor-pointer hover:bg-slate-500 hover:stroke-red-600 stroke-red-200 fill-red-300 h-10 w-10 p-2 rounded-xl transition-colors "
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
            className="hover:fill-red-400 hover:cursor-pointer hover:bg-slate-500 hover:stroke-red-400 stroke-none border-red-300  fill-red-300 h-10 w-10 p-2 rounded-xl transition-colors"
          />
        )}
      </CardContent>
    </Card>
  );
}

export default ProductCard;
