"use client";

import HeroVideo from "../components/hero-video";
import ProductCard from "../components/product-card";
import useFetch from "../hooks/useFetch";
import { ProductCardModel } from "../models/product.model";

function HomePage() {
  const { fetchData, loading } = useFetch<ProductCardModel>({
    url: "/products.json",
  });

  return (
    <>
      <HeroVideo />

      <section className="flex  flex-wrap justify-between px-3  py-10 bg-dark text-white">
        {Array.isArray(fetchData) &&
          fetchData.map((res) => (
            <ProductCard
              id={res.id}
              category={res.category}
              image_main={res.image_main}
              price={res.price}
              stock={res.stock}
              title={res.title}
              key={res.id}
            />
          ))}
        {loading && <h1 className="text-red-500 text-9xl">Loading...</h1>}
      </section>
    </>
  );
}
export default HomePage;
