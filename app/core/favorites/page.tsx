"use client";

import { useSelector } from "react-redux";
import { FavoritesModel } from "@/app/core/favorites/favorites.model";
import { RootState } from "@/redux/store";
import ProductCard from "@/components/product-card";
import { useFavorite } from "@/redux/hooks/useFavorite";
import ProductsWrapper from "@/components/products-wrapper";

function FavoritesPage() {
  const { handleRemoveFavorite } = useFavorite();

  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  return (
    <ProductsWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {favorites.map(
        ({ id, price, principalPic, name, categories }: FavoritesModel) => (
          <ProductCard
            key={id}
            id={id}
            price={price}
            categories={categories}
            principalPic={principalPic}
            name={name}
            favorite={true}
            removeFavorite={() => handleRemoveFavorite(id)}
            className="h-[400px]"
          />
        )
      )}
    </ProductsWrapper>
  );
}

export default FavoritesPage;
