"use client";

import ProductCard from "@/components/product/product-card";
import { FetchProducts, ProductCardModel } from "@/models/product.model";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductsWrapper from "@/components/product/products-wrapper";
import HeroVideo from "@/components/hero-video";

function HomePage() {
  const [products, setProducts] = useState<FetchProducts>({ products: [] });
  useEffect(() => {
    axios
      // .get(process.env.NEXT_PUBLIC_BASE_URL + "/products/getall")
      .get("/products.json")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <div>
      <HeroVideo />
      <ProductsWrapper>
        {products &&
          products?.products.map(
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
      </ProductsWrapper>
    </div>
  );
}
export default HomePage;
