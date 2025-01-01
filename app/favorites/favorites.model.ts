import { Category } from "@/models/product.model";

export type FavoritesModel = {
  id: number;
  principalPic: string;
  name: string;
  price: number;
  categories: Category[];
};
