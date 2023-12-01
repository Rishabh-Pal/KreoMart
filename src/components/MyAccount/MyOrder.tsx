"use client";

import React, { useState } from "react";

import Image from "next/image";
import img2 from "../../../public/assets/img2.png";
import Icon from "../../../public/assets/Favourite=False.png";
import LikedIcon from "../../../public/assets/Favourite-liked.png";

// import Button from "./Button";
import { useRouter } from "next/navigation";

const CartObject = () => {
  const [liked, setLiked] = useState(false);
  const router = useRouter();

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  const handleclick = () => {
    router.push("./single_product_detail");
  };
  return (
    <div onClick={handleclick}>
      <div className="flex">
        <div className="mr-4">
          <Image src={img2} alt="" />
        </div>
        <div className="flex-col mr-8">
          <div className="mb-2">
            <p>Under Armour Training stretch woven half zip jacket in white</p>
          </div>
          <div>
            <h1>₹156.00</h1>
          </div>
          <div className="flex">
            <p>Color:Black</p>
            <p>Size:X</p>
          </div>
          <div className="mt-2">{/* <Button /> */}</div>
          <div>
            <div className="flex">
              <Image
                className=""
                src={liked ? LikedIcon : Icon}
                onClick={handleLikeClick}
                alt="Like"
              />
              <span>Add to Favourite</span>
              <div className="flex">
                <span>
                  <img src="/assets/Close.png" />
                </span>
                <a className=" text-gray-500 ">Remove</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartObject;
