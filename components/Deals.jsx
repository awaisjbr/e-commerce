import { deals } from "@/public/assets";
import Image from "next/image";
import React from "react";
import mobileBg from "../public/1.png";
import logo from "../public/logo.png";
import mobile from "../public/smartphone.jpg";
import Link from "next/link";

const Deals = () => {
  return (
    <div className="flex flex-col md:flex-row mx-3 md:mt-5 gap-5">
      <div className="basis-[40%] bg-white flex flex-col">
        <h1 className=" ml-10 text-2xl font-semibold mt-20">
          Mobile & Electronics Top Offers
        </h1>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-3 md:gap-10 mt-10 justify-center mx-5 cursor-pointer">
          {deals.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center shadow-lg cursor-pointer hover:scale-105 border p-3 justify-between rounded-sm transition-all duration-200 ease-linear"
              >
                <Image src={item.image} alt="item image" className="w-28 md:w-52" />
                <p>{item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mobile basis-[60%] bg-slate-200 flex flex-col justify-center gap-3">
        <div className="self-center flex flex-col gap-3 mt-10">
          <Link href={"/"}><Image src={logo} width={50} alt="logo-image" className="cursor-pointer"/></Link>
          <h1 className="text-xl md:text-5xl font-bold">Top Selling SmartPhones</h1>
          <h5 className="text-lg text-gray-500 font-semibold ml-3">Lates Technology, Best Brands</h5>
        </div>
        <Image src={mobile} width={300} alt="mobile logo" className="self-center" />
        <button className="bg-blue-500 mx-auto text-white p-2 mb-2 md:mb-0 rounded-md">Buy Now</button>
      </div>
    </div>
  );
};

export default Deals;
