"use client";
import route from "@/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <Image
          className="w-full h-[200px] md:h-[250px] lg:h-[300px] "
          src="/assets/Prod_Bann.png"
          alt=""
          height={300}
          width={250}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center responsive-image-container">
          <h1 className="text-[25px] md:text-6xl mb-4 italic text-[#BFD9FF] font-bold text-shadow-md">
            BUY 1 GET 1
          </h1>
          <div className="text-2xl md:text-4xl mb-8 italic font-bold">
            TSHIRTS
          </div>
          <Link href={route.Product}>
            <button className="px-4 md:px-6 py-2 md:py-4 mt-4 md:mt-4 font-bold text-lg text-primary bg-white">
              Explore now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
