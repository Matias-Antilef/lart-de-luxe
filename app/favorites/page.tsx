"use client";

import { useSelector } from "react-redux";
import { FavoritesModel } from "@/app/favorites/model/favorites.model";
import useFavorite from "./hooks/useFavorite";
import { RootState } from "@/redux/store";
import ProductCard from "@/components/product-card";

function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const { handleRemoveFavorite } = useFavorite();

  return (
    <div className="">
      <section className="flex flex-wrap justify-around">
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
