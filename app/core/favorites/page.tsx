"use client";

import { useSelector } from "react-redux";
import { FavoritesModel } from "@/app/core/favorites/favorites.model";
import { RootState } from "@/redux/store";
import ProductCard from "@/components/product-card";
import { useFavorite } from "@/redux/hooks/useFavorite";

function FavoritesPage() {
  const { handleRemoveFavorite } = useFavorite();

  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  return (
    <div className="w-screen">
      <section className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2  ">
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
                removeFavorite={() => handleRemoveFavorite(id)}
              />
            </div>
          )
        )}
      </section>
    </div>
  );
}

export default FavoritesPage;
