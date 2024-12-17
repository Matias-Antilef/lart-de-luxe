"use client";

import { useSelector } from "react-redux";
import { useRemoveFavorite } from "../../features/favorites/hooks/useFavorite";
import { RootState } from "../../../redux/store";
import ProductCard from "../../../components/product-card";
import { FavoritesModel } from "@/app/features/favorites/favorites.model";

function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const removeFavorite = useRemoveFavorite();

  return (
    <div className="">
      <section className="flex flex-wrap justify-around">
        {favorites.map(
          ({
            id,
            price,
            principal_picture,
            name,
            categories,
          }: FavoritesModel) => (
            <div key={id}>
              <ProductCard
                key={id}
                id={id}
                price={price}
                categories={categories}
                principal_picture={principal_picture}
                name={name}
              />
              <button onClick={() => removeFavorite(id)}>remove</button>
            </div>
          )
        )}
      </section>
    </div>
  );
}

export default FavoritesPage;
