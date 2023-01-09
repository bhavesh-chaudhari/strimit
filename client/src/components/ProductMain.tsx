import React from "react";
import ProductCard from "./ProductCard";
import productCardData from "../data/productCardData";

const ProductMain = () => {
  return (
    <div className="pb-12">
      <h2 className="text-center text-green-500 text-3xl pt-[120px] md:pt-[80px] xl:pt-[40px] font-semibold">
          <span className="line-through text-red-500">Rs. 2499</span>{" "}&nbsp;&nbsp;FREE!</h2>
      <div className="flex justify-center items-center">
        <h1 className="pt-6 text-3xl text-center md:text-4xl font-semibold w-[90%] md:w-[80%] 2xl:w-[100%]">
          Pre-Book Now!
        </h1>
      </div>
      <div className="flex flex-col mt-8 md:mt-12 gap-14 justify-center items-center">
        {productCardData.map((data) => {
          return <ProductCard key={data.id} {...data}></ProductCard>;
        })}
      </div>
    </div>
  );
};

export default ProductMain;
