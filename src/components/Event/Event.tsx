'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Event.module.css";
import { EventData } from "../../../typings";
import RemainTime from "./RemainTime";
import Shopbutton from "../Hero/Shopbutton";
import EventImage from "./EventImage";



const Event = () => {
  


  return (
    <>
      <div className="sm:flex my-12 mt-7 justify-between items-center bg-[#F9F9FB] w-full">

          <div className=" bg-[#EBEEF4] sm:w-3/6   h-full">

          <EventImage />

          </div>
        
       
          <div className="sm:w-2/5 p-4" >
            <p className="text-base">Exclusive</p>
            <p className="text-2xl font-bold uppercase mb-1">50% OFF</p>
            <p className="my-4 text-[#030822]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            </p>
           
            <p className="mb-1 font-bold text-[#030822] mb-2">Hurry up! <span className="text-[#8991A4]">Offer expires in:</span></p>
                
            <RemainTime/>
            <Shopbutton/>
          </div>
        

      </div>
    </>
  );
};

export default Event;
