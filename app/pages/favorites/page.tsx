"use client";

import { useSelector } from "react-redux";
import { useRemoveFavorite } from "../../features/favorites/hooks/useFavorite";
import { RootState } from "../../../redux/store";
import ProductCard from "../../../components/product-card";

function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const removeFavorite = useRemoveFavorite();

  return (
    <div className="">
      <section className="flex flex-wrap justify-around">
        {favorites.map(({ id, image_main, title }) => (
          <div key={id}>
            <ProductCard id={id} image_main={image_main} title={title} />
            <button onClick={() => removeFavorite(id)}>remove</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default FavoritesPage;
