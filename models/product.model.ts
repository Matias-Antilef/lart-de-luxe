export type ProductModel = {
  id: number;
  image_main: string;
  images: Image[];
  title: string;
  description: string;
  price?: number;
  category?: Category[];
  stock?: number;
};

export type ProductCardModel = Omit<ProductModel, "images" | "description">;

export type Image = {
  id: number;
  url: string;
};

export type Category = {
  id: number;
  name: string;
};
