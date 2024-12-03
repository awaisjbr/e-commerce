"use client";
import { assets } from "@/public/assets";
import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="my-3 mx-10 flex">
      <Carousel infiniteLoop={true} dynamicHeight={true} autoPlay={true} autoFocus={true} showThumbs={false} showArrows={false} interval={3000} showStatus={false}>
        <Image src={assets.bannerkids} alt="bannerImages" />
        <Image src={assets.bannerWomen} alt="bannerImages"/>
        <Image src={assets.bannerMens} alt="bannerImages"/>
      </Carousel>
    </div>
  );
};

export default Banner;
