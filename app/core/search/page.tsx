"use client";

import ProductCard from "@/components/product-card";
import ProductsWrapper from "@/components/products-wrapper";
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
import NavFilter from "./components/nav-filter";

function SearchPage() {
  const [products, setProducts] = useState<FetchProducts>({ products: [] });
  const [filterName, setFilterName] = useState("");
  const [filtersAdvanced, setFiltersAdvanced] = useState<{}>({});

  // page=1&size=10&name=a&minPrice=2&maxPrice=3&category=a&orderByHPrice=true&orderByLPrice=true&orderByNameAz=true&orderByNameZa=true
  useEffect(() => {
    axios
      // .get(process.env.NEXT_PUBLIC_BASE_URL + "/products/filter?")
      .get("/products.json")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (filterName.trim().length === 0) {
        alert("Please enter a value");
      } else {
        alert(`Input enviado: ${filterName}`);
        setFilterName("");
      }
    }
  };

  const handleFilters = (filters: any) => {
    setFiltersAdvanced(filters);
  };

  useEffect(() => {
    alert(JSON.stringify(filtersAdvanced));
  }, [filtersAdvanced]);
  return (
    <div>
      <Card>
        <CardHeader>
          <CardDescription className="px-52 py-3">
            <Input
              placeholder="Filter your product"
              className="py-6 px-10 rounded-full border-neutral-800 text-black"
              value={filterName}
              onKeyDown={handleKeyDown}
              onChange={(e) => setFilterName(e.target.value)}
            />
          </CardDescription>
          <div className="items-center justify-center flex">
            <NavFilter handleFilters={handleFilters} />
          </div>
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
                    className=" min-h-[200px] max-lg:h-[35vh] max-sm:h-[50vh]"
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
