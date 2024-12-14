import { HeartIcon } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ProductCardModel } from "../models/product.model";
import { useAddFavorite } from "../app/features/favorites/hooks/useFavorite";
import { PublicRoutes } from "../routes/routes";
function ProductCard({
  id,
  title,
  image_main,
  price,
  stock,
  category,
}: ProductCardModel & { crack?: boolean }) {
  const addFavorite = useAddFavorite();

  return (
    <Card className="relative mb-7 ">
      <Link href={`/${PublicRoutes.PAGES}/${PublicRoutes.PRODUCT_INFO}/${id}`}>
        <div className="relative w-[500px] h-[500px] rounded-xl  ">
          <Image
            src={image_main}
            alt={title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader>
          <CardTitle> {title} </CardTitle>
          <CardDescription> {price} </CardDescription>
        </CardHeader>
      </Link>
      <HeartIcon
        onClick={() =>
          addFavorite({ id, category, image_main, price, stock, title })
        }
        className="hover:fill-red-400 hover:cursor-pointer hover:bg-slate-500 hover:stroke-red-400 stroke-none border-red-300  fill-red-300 h-10 w-10 p-2 rounded-xl transition-colors  absolute top-5 right-5  "
      />
    </Card>
  );
}

export default ProductCard;
