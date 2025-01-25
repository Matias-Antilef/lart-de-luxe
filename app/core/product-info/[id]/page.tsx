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
    <div className="min-h-screen p-2  ">
      <Card className="h-full flex">
        <div>
          <div className="relative h-full w-[500px]">
            <Image
              src={"/js.png"}
              alt={productInfo?.name || "Product"}
              fill
              className="object-cover h-full w-full"
              sizes=""
            />
          </div>
          <div></div>
        </div>

        <div className="h-[500px] w-full flex flex-col ">
          <CardHeader className=" ">
            <CardTitle className=" text-xl"> {productInfo?.name} </CardTitle>
            <CardDescription> {productInfo?.brand} </CardDescription>
          </CardHeader>
          <CardContent className=" h-full">
            <span>{productInfo?.price}</span>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
export default ProductInfo;
