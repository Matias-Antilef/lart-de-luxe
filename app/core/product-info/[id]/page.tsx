"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductModel } from "@/models/product.model";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function ProductInfo() {
  const [productInfo, setProductInfo] = useState<ProductModel | null>(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      // .get(process.env.NEXT_PUBLIC_BASE_URL + "/products/getall")
      .get("/products.json")
      .then((res) => {
        setProductInfo(res.data.products.find((p: any) => p.id == id));
      });
  }, [id]);

  return (
    <div className="">
      <div className="relative bg-red-600 h-[792px] w-full">
        <div className="relative flex h-full w-full">
          <div className="w-1/2 relative">
            <Image
              src={"/js.png"}
              alt={productInfo?.name || "Product"}
              fill
              className="object-cover h-full w-full"
              sizes=""
            />
          </div>
          <div className="w-1/2 relative">
            <Image
              src={"/js.png"}
              alt={productInfo?.name || "Product"}
              fill
              className="object-cover h-full w-full"
              sizes=""
            />
          </div>
        </div>
        <Card className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
          <CardHeader className=" ">
            <CardTitle className=" text-xl"> {productInfo?.name} </CardTitle>
            <CardDescription> {productInfo?.brand} </CardDescription>
          </CardHeader>
          <CardContent className=" h-full">
            <span>{productInfo?.price}</span>
            <span>{JSON.stringify(productInfo)}</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
  {
    /* 
  <div className="h-[500px] w-full flex flex-col ">
    <CardHeader className=" ">
      <CardTitle className=" text-xl"> {productInfo?.name} </CardTitle>
      <CardDescription> {productInfo?.brand} </CardDescription>
    </CardHeader>
    <CardContent className=" h-full">
      <span>{productInfo?.price}</span>
      <span>{JSON.stringify(productInfo)}</span>
    </CardContent>
  </div> */
  }
}
export default ProductInfo;
