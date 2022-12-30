import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  subtitle: string;
  points: string[];
  image?: string;
  textAlignment: "left" | "right";
}

const ProductCard = (props: ProductCardProps) => {
  const { title, description, subtitle, points, textAlignment } = props;

  return (
    <div className="shadow-[0px_0px_22px_-10px_rgba(0,0,0,0.2)] text-lg rounded-lg w-[85%] max-w-[1250px] md:p-6 md:py-6 xl:p-12 xl:py-14">
      <div
        className={clsx(
          "flex",
          textAlignment === "left" && "flex-row",
          textAlignment === "right" && "flex-row-reverse",
          "md:items-start xl:items-center"
        )}
      >
        <div className={clsx("w-[60%] md:p-4", textAlignment === "right" && "pl-10")}>
          <h2 className="md:text-2xl xl:text-4xl font-extrabold text-[#1d2e3b] mb-6">
            {title}
          </h2>
          <p className="text-lg text-slate-600 mb-4">{description}</p>
          <h3 className="text-lg font-bold mb-4">{subtitle}</h3>
          <div className="flex flex-col gap-2">
            {points.map((point, index) => {
              return (
                <p key={index} className="flex items-start gap-2">
                  <span className="mt-1 text-fubg-fuchsia-500">
                    <IoIosArrowForward color="#d946ef"></IoIosArrowForward>
                  </span>
                  <span className="text-slate-600">{point}</span>
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[40%] p-4">
          <div className="w-full">
            {/* <Image></Image> */}
            <div className="w-full h-56 bg-gray-100 rounded-md"></div>
          </div>
          <div className="w-full flex flex-col items-center">
            <button className="bg-fuchsia-500 mt-5 mb-3 hover:bg-fuchsia-400 transition-all group gap-[1px] p-2 rounded-[4px] shadow-md font-bold  text-white border border-gray-200 w-full max-w-[250px] group-hover:text-slate-200 flex justify-center items-center">
              Pre-Book Now
              <span className="flex">
                <span className="flex h-max transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-100">
                  <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                </span>
                <span className="flex transition-all duration-300 group-hover:-translate-x-2 group-hover:text-slate-100 h-max -translate-x-3">
                  <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                </span>
              </span>
            </button>
            <p className="text-sm text-gray-500">
              No Contracts {"•"} Cancel Anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
