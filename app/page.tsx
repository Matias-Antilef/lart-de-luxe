"use client";

import ProductCard from "@/components/product-card";
import HeroVideo from "../components/hero-video";
import useFetch from "../hooks/useFetch";
import { FetchProducts, ProductCardModel } from "@/models/product.model";
import Navbar from "@/components/navbar";

function HomePage() {
  const { fetchData } = useFetch<FetchProducts>({
    url: "/products.json",
  });

  return (
    <div>
      <Navbar />
      <HeroVideo />

      <section className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 ">
        {fetchData &&
          fetchData?.products.map(
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
    </div>
  );
}
export default HomePage;
