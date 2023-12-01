"use client";
import Shopbutton from "./Shopbutton";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import { Carousel } from "@mantine/carousel";
// import Carousel from "@/lib/data/carousel";

// import GlideComponent from './Glide';

import { HeroData } from "../../../../typings";
import Link from "next/link";
import route from "@/routes";
import useBanners from "@/hooks/useBanners";
import { useState, useEffect, useRef } from "react";
import { slides } from "@/lib/data/RelatedProduct";
import { DialogBody } from "@mantine/core/lib/Dialog/Dialog"; 

interface HeroProps {
  data: HeroData[];
}

const HeroSection: React.FC<HeroProps> = ({ data }) => {
  const { data: banners, error, isFetching } = useBanners();

  console.log(banners, "banners");

  return (
    <div className="my-4 ">
      <Carousel loop slideGap="lg" align="start" className="carousel-container">
        {banners?.map((banner: any) => (
          <Carousel.Slide key={banner?.id}>
            <Link href={route.Product}>
              <div className="  flex flex-col-reverse sm:flex-row justify-between items-center  w-full gap-16  mt-10">
                <div className="  w-full h-full md:w-5/12  aspect-square  overflow-hidden mx-auto flex justify-center items-center pl-5">
                  <Image
                    src={banner?.image}
                    className=" w-full h-full "
                    alt="hero"
                    fill={true}
                  />
                </div>
                {/* <div className="absolute  bottom-5 w-full mx-auto text-center">
              <Link href={route.Product}>
                <button className="px-4 md:px-6 py-2 md:py-4 mt-4 md:mt-4 font-bold text-lg text-white bg-primary rounded-2">
                  Explore now
                </button>
              </Link>
            </div> */}
              </div>
            </Link>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
