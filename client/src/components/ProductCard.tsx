import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { useCurrentUser } from "../hooks/useUser";
import { getUserFromLocalStorage } from "../utils/localStorage";

interface ProductCardProps {
  title: string;
  description: string;
  subtitle: string;
  points: string[];
  imgPath: string;
  textAlignment: "left" | "right";
  width: number;
}

const ProductCard = (props: ProductCardProps) => {
  const {
    title,
    description,
    subtitle,
    points,
    textAlignment,
    imgPath,
    width,
  } = props;
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { data } = useCurrentUser();

  useEffect(() => {
    setUser({ ...getUserFromLocalStorage(), ...data });
    setIsLoading(false);
  }, [data]);

  return (
    <div className="shadow-[0px_0px_22px_-10px_rgba(0,0,0,0.2)] text-lg rounded-lg w-[90%] md:w-[85%] max-w-[1250px] 2xl:w-[100%] 2xl:max-w-[100%] md:p-6 md:py-6 xl:p-12 xl:py-14">
      <div
        className={clsx(
          "flex",
          textAlignment === "left" && "md:flex-row",
          textAlignment === "right" && "md:flex-row-reverse",
          "md:items-start xl:items-center",
          "flex-col"
        )}
      >
        <div
          className={clsx(
            "md:w-[60%] px-5 py-4",
            textAlignment === "right" && "md:pl-10",
            "w-full"
          )}
        >
          <h2 className="md:text-2xl xl:text-4xl font-extrabold text-[#1d2e3b] mb-6">
            {title}
          </h2>
          <p className="md:text-lg text-slate-600 mb-4">{description}</p>
          <h3 className="md:text-lg font-bold mb-4">{subtitle}</h3>
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
        <div className="flex flex-col justify-center items-center w-full md:w-[40%] px-5 py-3 md:p-4 relative">
          <div className="w-full flex justify-center items-center relative border shadow-sm shadow-fuchsia-200 rounded-xl overflow-hidden border-gray-50">
            <Image
              src={imgPath}
              alt={`${title}`}
              width={width}
              height={250}
              draggable={"false"}
            ></Image>
            {/* <div className="w-full h-56 bg-gray-100 rounded-md"></div> */}
          </div>
          <div className="w-full flex flex-col items-center">
            {!isLoading && (
              <Link
                href={user?.id ? "/contact" : "/signup"}
                className="bg-fuchsia-500 mt-5 mb-3 hover:bg-fuchsia-400 transition-all group gap-[1px] p-2 rounded-[4px] shadow-md font-bold  text-white border border-gray-200 w-full max-w-[250px] group-hover:text-slate-200 flex justify-center items-center"
              >
                Pre-Book Now
                <span className="flex">
                  <span className="flex h-max transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-100">
                    <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                  </span>
                  <span className="flex transition-all duration-300 group-hover:-translate-x-2 group-hover:text-slate-100 h-max -translate-x-3">
                    <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                  </span>
                </span>
              </Link>
            )}
            <p className="text-sm text-gray-500">
              No Contracts {"•"} Money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
