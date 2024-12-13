import { HeartIcon } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./card";
import { ProductCardModel } from "@/models/product.model";
import Image from "next/image";
import { PublicRoutes } from "@/routes/routes";
import Link from "next/link";
import { useAddFavorite } from "@/hooks/useFavorite";

function ProductCard({
  id,
  title,
  image_main,
  price,
  stock,
  category,
}: ProductCardModel) {
  return (
    <Card className="relative overflow-hidden">
      <Link href={`/${PublicRoutes.PRODUCT_INFO}/${id}`}>
        <div className="relative w-[500px] h-[500px]  ">
          <Image
            src={image_main}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader>
          <CardTitle> {title} </CardTitle>
          <CardDescription> {price} </CardDescription>
        </CardHeader>
      </Link>
      <HeartIcon
        onClick={useAddFavorite({
          id,
          title,
          image_main,
          price,
          stock,
          category,
        })}
        className="hover:fill-red-400 hover:bg-slate-500 hover:stroke-red-400 stroke-none border-red-300  fill-red-300 h-10 w-10 p-2 rounded-xl transition-colors  absolute top-5 right-5  "
      />
    </Card>
  );
}

export default ProductCard;
