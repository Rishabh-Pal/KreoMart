"use client";
import Image from "next/image";

import { HeroData } from "../../../typings";
import { Carousel } from "@mantine/carousel";
import React from "react";
import Shopbutton from "../Home/HeroSection/Shopbutton";
interface HeroProps {
  data: HeroData[];
}

const HeroSection: React.FC<HeroProps> = ({ data }) => {
  return (
    <div className="m-4">
      <Carousel loop slideGap="lg" align="start" className="carousel-container">
        {data.map((hero) => (
          <Carousel.Slide key={hero.id}>
            <div className="flex flex-col-reverse sm:flex-row justify-evenly items-center relative w-full  mt-10">
              <div className="flex flex-col items-start justify-center gap-5 sm:gap-10 p-4 ">
                <div className="flex flex-col items-start justify-start gap-[24px]">
                  <div className="md:text-5xl text-2xl font-bold mb-3 ">{hero.title}</div>
                  <div className=" font-normal text-xs flex items-center ">
                    {hero.description}
                  </div>
                </div>
                <div className=" ">
                  <Shopbutton />
                </div>
              </div>
              <div className="h-[642px] w-[642px] rounded-full overflow-hidden">
                <img
                  src={hero.image}
                  className="object-cover w-full "
                  alt="hero"
                />
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
