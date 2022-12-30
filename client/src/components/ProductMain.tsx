import React from "react";
import ProductCard from "./ProductCard";
import productCardData from "../data/productCardData";

const ProductMain = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-semibold pt-10 w-[80%]">
          Pre-Book Now for <span className="line-through">2499</span> 999/-
        </h1>
      </div>
      <div className="flex flex-col my-12 gap-14 justify-center items-center">
        {productCardData.map((data) => {
          return <ProductCard key={data.id} {...data}></ProductCard>;
        })}
      </div>
    </div>
  );
};

export default ProductMain;
