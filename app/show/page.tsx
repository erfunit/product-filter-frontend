import http from "@/api/http";
import { Data } from "@/types/formdata";
import React from "react";
import ProductCart from "../components/ProductCart";

async function getProducts(): Promise<string | Data[]> {
  return http
    .get("/products")
    .then((res) => res.data)
    .catch((err) => err.message);
}

const ShowPage = async () => {
  const data: string | Data[] = await getProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
      {typeof data === "string"
        ? data
        : data.map((product: Data) => (
            <ProductCart
              name={product.name}
              price={product.price}
              tags={product.tags}
              description={product.description}
            />
          ))}
    </div>
  );
};

export default ShowPage;
