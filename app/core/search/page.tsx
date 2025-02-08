"use client";

import ProductCard from "@/components/product-card";
import ProductsWrapper from "@/components/products-wrapper";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ProductCardModel } from "@/models/product.model";
import axios from "axios";
import { useState } from "react";
import NavFilter from "./components/nav-filter";
import { FilterForm } from "./components/filter.model";

interface FilterProducts {
  response: ProductCardModel[];
}

function SearchPage() {
  const [products, setProducts] = useState<FilterProducts>({ response: [] });

  const handleFilters = async (filtersAdvance: FilterForm) => {
    const queryParams = new URLSearchParams(filtersAdvance.toString());
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/products/filter?${queryParams}`;

    try {
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="items-center justify-center flex flex-col gap-2">
            <NavFilter handleFilters={handleFilters} />
          </div>
        </CardHeader>
        <CardContent>
          <ProductsWrapper className="grid-cols-4 gap-5 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {products &&
              products?.response.map(
                ({
                  id,
                  principalPic,
                  name,
                  price,
                  categories,
                }: ProductCardModel) => (
                  <ProductCard
                    key={id}
                    id={id}
                    price={price}
                    categories={categories}
                    principalPic={principalPic}
                    name={name}
                    className=" h-[400px] max-lg:h-[35vh] max-sm:h-[50vh]"
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
