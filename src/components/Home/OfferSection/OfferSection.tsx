"use client";

import RemainTime from "./RemainTime";
import Shopbutton from "../HeroSection/Shopbutton";
import EventImage from "./OfferImage";

const OfferSection = () => {
  return (
    <>
      {" "}
      <div className="relative  w-full flex flex-row items-center justify-center  box-border text-left text-base text-gray-default ">
        <div className="flex flex-col sm:flex-row gap-6 my-12 mt-7 justify-between items-center bg-white w-full">
          
          <div className=" object-cover sm:w-3/6  ">
            <EventImage />
          </div>

          <div className="sm:w-2/4    ">
            <div className="p-8">
            <p className=" text-[16px] font-semibold">EXCLUSIVE</p>
            <p className="md:text-[52px] text-[40px] font-bold uppercase mb-1">50% OFF</p>
            <p className="my-4 text-[14px] md:text-[18px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p>

            <p className=" font-bold text-primary mb-2">
              Hurry up!{" "}
              <span className="text-[#8991A4]">Offer expires in:</span>
            </p>

            <RemainTime />
            <Shopbutton />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default OfferSection;
