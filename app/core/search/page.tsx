"use client";

import ProductCard from "@/components/product/product-card";
import ProductsWrapper from "@/components/product/products-wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FetchProducts, ProductCardModel } from "@/models/product.model";
import axios from "axios";
import { useEffect, useState } from "react";

function SearchPage() {
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
      <Card>
        <CardHeader>
          <CardTitle>Filter products</CardTitle>
          <CardDescription>
            <Input placeholder="Search" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ProductsWrapper className="grid-cols-4 gap-5 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
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
                    price={price}
                    categories={categories}
                    principalPic={principalPic}
                    name={name}
                    className="h-[40vh] max-lg:h-[35vh] max-sm:h-[50vh]"
                  />
                )
              )}
          </ProductsWrapper>
        </CardContent>
      </Card>
    </div>
  );
}

export default SearchPage;
