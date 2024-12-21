"use client";

import { useSelector } from "react-redux";
import useFavorite from "../../features/favorites/hooks/useFavorite";
import { RootState } from "../../../redux/store";
import ProductCard from "../../../components/product-card";
import { FavoritesModel } from "@/app/features/favorites/favorites.model";

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
              />
              <button onClick={() => handleRemoveFavorite(id)}>remove</button>
            </div>
          )
        )}
      </section>
    </div>
  );
}

export default FavoritesPage;
