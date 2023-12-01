"use client";

import React, { useState } from "react"; 
import leftarrow from "../../../public/assets/arrow-left.png";
import Icon from "../../../public/assets/Favourite=False.png";
import LikedIcon from "../../../public/assets/Favourite-liked.png";
import rightarrow from "../../../public/assets/arrow-right.png";

import selected from "../../../public/assets/Selected=True.png";
import shape from "../../../public/assets/Shape.png";
import { slides } from "@/lib/data/RelatedProduct";
import Image from "next/image";

const Related_products: React.FC = () => {
  const [curr, setCurr] = useState<number>(0);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };


  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  return (
    <main className="xl:max-w-[1100px] mx-auto">
      <div className="flex justify-between px-6">
        <div className="font-semibold md:text-4xl text-2xl py-10 text-gray-default ">
          You may also like
        </div>
        <div className="py-14 text-[32px] hidden md:block">
          <div className="relative w-full flex flex-row items-center justify-end gap-[16px]">
            <button onClick={prev}>
              <Image
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src={leftarrow}
              />
            </button>

            <div className="flex flex-row items-center justify-start gap-[12px]">
              <button>
                <Image
                  className="relative rounded-[100px] w-[17px] h-[17px]"
                  alt=""
                  src={selected}
                />
              </button>
              <button>
                <Image className="relative w-1.5 h-1.5" alt="" src={shape} />
              </button>
            </div>
            <button onClick={next}>
              <Image
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src={rightarrow}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-hidden ">
        <div
          className="flex transition-transform ease-out duration-500 "
          style={{ transform: `translateX(-${curr * 50}%)` }}
        >
          {slides.map((item, i) => (
            <div className="w-[300px] h-auto m-4 text-[12px]" key={i}>
              <div className="relative w-300 h-400 justify-center mx-auto">
                <Image
                  className="object-cover w-full h-auto"
                  src={item.img}
                  alt="product-related"
                  width={120}  
                  height={60}
                />
                <Image
                  className="absolute bottom-5 right-5 cursor-pointer"
                  src={liked ? LikedIcon : Icon}
                  onClick={handleLikeClick}
                  alt="Like"
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <div>{item.description}</div>
                <span>{item.price}</span>
                <span className="line-through font-medium text-gray-500 mr-2">
                  {item.dis_price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Related_products;
