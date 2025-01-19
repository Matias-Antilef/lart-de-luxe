"use client";

import { FavoritesModel } from "@/app/core/favorites/favorites.model";
import ProductCard from "@/components/product/product-card";
import ProductsWrapper from "@/components/product/products-wrapper";
import { useFavorite } from "@/context/favorite.store";

function FavoritesPage() {
  const favorites = useFavorite((state) => state.favorites);
  const removeToFavorites = useFavorite((state) => state.removeToFavorites);

  return (
    <ProductsWrapper>
      {favorites.map(
        ({ id, price, principalPic, name, categories }: FavoritesModel) => (
          <div key={id}>
            <ProductCard
              key={id}
              id={id}
              price={price}
              categories={categories}
              principalPic={principalPic}
              name={name}
              favorite={true}
              removeFavorite={() => removeToFavorites(id)}
            />
          </div>
        )
      )}
    </ProductsWrapper>
  );
}

export default FavoritesPage;
