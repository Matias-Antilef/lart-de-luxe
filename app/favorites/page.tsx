"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.favorites.items);

  return (
    <div className="bg-gray-400">
      <ul>
        {favorites.map((item) => (
          <div key={item.id}>
            <li> {item.title} </li>
            <li> {item.image_main} </li>
            <li> {item.price} </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default FavoritesPage;
