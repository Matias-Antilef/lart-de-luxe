import { Category } from "@/models/product.model";

export type FavoritesModel = {
  id: number;
  principal_picture: string;
  name: string;
  price: number;
  categories: Category[];
};
