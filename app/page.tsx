"use client";

import ProductCard from "@/components/product-card";
import HeroVideo from "../components/hero-video";
import useFetch from "../hooks/useFetch";
import { FetchProducts, ProductCardModel } from "@/models/product.model";

function HomePage() {
  const { fetchData } = useFetch<FetchProducts>({
    url: "/products.json",
  });

  return (
    <>
      <HeroVideo />

      <section className="flex flex-wrap justify-between px-3 py-10 bg-dark text-white">
        {fetchData &&
          fetchData?.products?.map(
            ({
              id,
              principalPic,
              name,
              price,
              stock,
              categories,
            }: ProductCardModel) => (
              <ProductCard
                key={id}
                id={id}
                principalPic={principalPic}
                name={name}
                price={price}
                stock={stock}
                categories={categories}
              />
            )
          )}
      </section>
    </>
  );
}
export default HomePage;
