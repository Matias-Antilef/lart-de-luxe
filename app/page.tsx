"use client";

import ProductCard from "@/components/product-card";
import HeroVideo from "../components/hero-video";
import useFetch from "../hooks/useFetch";
import { FetchProducts, ProductCardModel } from "@/models/product.model";

function HomePage() {
  const { fetchData } = useFetch<FetchProducts>({
    url: "/products.json",
  });

  console.log(fetchData);
  return (
    <>
      <HeroVideo />

      <section className="flex flex-wrap justify-between px-3 py-10 bg-dark text-white">
        {fetchData &&
          fetchData?.products?.map(
            ({
              id,
              principal_picture,
              name,
              price,
              stock,
              categories,
            }: ProductCardModel) => (
              <ProductCard
                key={id}
                id={id}
                principal_picture={principal_picture}
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
