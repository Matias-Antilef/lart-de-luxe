export type FetchProducts = {
  products: ProductModel[];
};

export type ProductModel = {
  id: number;
  name: string;
  brand?: string;
  description: string;
  price?: number;
  disccount?: number;
  active?: boolean;
  categories: Category[];
  stock?: number;
  principal_picture: string;
  photos: Photo[];
};

export type ProductCardModel = Omit<
  ProductModel,
  "photos" | "description" | "active"
>;

export type Photo = {
  id: number;
  url: string;
};

export type Category = {
  id: number;
  name: string;
};
