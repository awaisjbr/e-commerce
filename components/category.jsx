import React from "react";
import { allCategory } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

const category = () => {
  return (
    <div className="bg-white mt-20 mx-3 h-28 flex items-center">
      <div className="flex mx-auto gap-10 overflow-auto">
        {allCategory.map((item, i) => {
          return (
            <div className="flex flex-col cursor-pointer items-center" key={i}>
              <div className="w-[100px] h-[70px] flex items-center justify-center">
               <Link href={`/category/${item.id}`}><Image className="w-16" src={item.image} alt="item Image" /></Link>
              </div>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default category;
