import React, { useState } from "react";
import Image from "next/image";

import img2 from "../../../public/assets/img2.png";
import Icon from "../../../public/assets/Icon.png";
import Ticket from "../../../public/assets/Ticket.png";
import Line from "../../../public/assets/Line.png";
import CartObject from "./CartObject";
import LikedIcon from "../../../public/assets/Favourite-liked.png";

import Button from "./Button";
import ArrowButton from "./ArrowButton";

// interface CartData {
//   id: number;
//   title: string;
//   quantity: string;
//   size: string;
//   color: string;
//   image:string;
// }

function Cart() {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="flex px-20 justify-center">
      <div className="flex flex-col">

      <CartObject/>
      <CartObject/>
      <CartObject/>
      </div>
      <div className="">
        <div className="flex">
          <div>
            <Image src={Ticket} alt="co" />
          </div>
          <div className="flex">
            

          <div className="flex-item">
            Apply coupon
          </div> 
          <div className="flex-item">
            <ArrowButton />
          </div>
          </div>
        </div>
        <div className="">
          <div className="flex gap-4 justify-between">
            <div className="">Order summary</div>
            <div>AHDT216793SGYEV</div>
          </div>
          <div className="">
            <div className="">
              <div className=" flex justify-between">
                <div className="">Subtotal</div>
                <div className="">₹468</div>
              </div>
              <div className=" flex justify-between">
                <div className="">Discount</div>
                <div className="">
                  {/* <Image className="line" alt="Line" src={Line} /> */}
                  <div className="text-[#11DCAD]">-₹68</div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="">Convenience fee</div>
                <div className="">₹30</div>
              </div>
              <div className="flex text-[#030822] text-xl justify-between">
                <div> You Pay</div>
                <div>₹430</div>
              </div>

              <button
                type="submit"
                className="w-full  bg-[#020044] hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold  px-4 py-3 mt-6"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
