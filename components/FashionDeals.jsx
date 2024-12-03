import Image from "next/image";
import React from "react";
import exclusiveImage from "@/public/exclusive_image.png";
import {fashionProducts} from "@/public/assets";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

const FashionDeals = () => {
  return (
    <div className="my-2 mx-3 h-fit flex gap-5">
      <div className="flex-1 bg-white shadow-inner flex flex-col">
        <h1 className="text-xl font-bold p-5">Fashion Best Sellers</h1>
        <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-8 overflow-auto">
          {fashionProducts.map((item, i) => {
            return (
              <div key={i} className="md:border rounded-md shadow p-2 md:p-5 m-2 flex items-center justify-around md:flex-col gap-5 md:gap-2 cursor-pointer hover:scale-105 transition-all duration-200 ease-linear">
                <Image src={item.image} alt="deals image" className="w-20 md:w-60"/>
                <div className="flex flex-col gap-2 items-center">
                    <p className="text-sm font-semibold">{item.desc}</p>
                    <p className="text-sm font-semibold">From PKR {item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-red-100 p-5 hidden md:block shadow-blue-500 shadow-md hover:scale-105 transition-all duration-200 ease-linear hover:shadow-2xl hover:shadow-blue-500">
        <Image src={exclusiveImage} alt="feature image" width={200} />
      </div>
    </div>
  );
};

export default FashionDeals;
