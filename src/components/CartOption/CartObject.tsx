'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img2 from "../../../public/assets/img2.png";
import Icon from "../../../public/assets/Favourite=False.png";
import LikedIcon from "../../../public/assets/Favourite-liked.png";

import { useRouter } from "next/navigation";
import { UseCartStore } from "@/store/store";
import { CartItem } from "../../../typings";

interface Props {
  data: CartItem;
}

const CartObject: React.FC<Props> = ({ data }) => {
  const [liked, setLiked] = useState(false);
  const router = useRouter();
  const { remOneCart, updateCart } = UseCartStore((state)=>({remOneCart:state.remOneCart, updateCart:state.updateCart}));
  const quantity: string[] = ["1", "2", "3", "4"];
  const [selectedQuant, setSelectedQuant] = useState<string>("");

  useEffect(() => {
    console.log("Cart State has changed: ", data);
  }, [data, remOneCart, updateCart]);
  const handleLikeClick = () => {
    setLiked(!liked);
  };
  const handleRemove =async () => {
    try {
      const response = await remOneCart(data.id);
      console.log(data.id);
      console.log('cart item is removed', response);
    } catch (err) {
      console.error('Error in handleRemove:', err);
      return err;
    }
  }; 
  return (
    <div className="flex gap-4 text-[14px] w-full mb-4">
      <div className=" cursor-pointer">
        <Image
          src={data.product_variant.preview_image}
          alt="women"
          className="object-cover h-full"
          width={150}
          height={160}
        />
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <div className="relative">
            <div className="flex-row ">
              <div className="mb-1 text-start">{data.id} </div>
            </div>

            <div>
              <div className="flex gap-4 mt-2 ">
                <div className="flex">
                  <div className="mr-1">Color: </div>
                  <div>Black</div>
                </div>
                <div className="flex">
                  <div className="mr-1">Size: </div>
                  <div>X</div>
                </div>
              </div>
              <div className="">
                <div className="flex">
                  <select
                    id="state"
                    name="state"
                    value="name"
                    className="w-[70px] h-[30px] px-2 py-1 my-2 border focus:bg-white text-[12px] focus:outline-none"
                  >
                    <option value="">1</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-1 mr-4  ">
            <h1>₹300</h1>
            <h2 className="line-through text-[#7777]">₹344</h2>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-2 text-base ">
            <Image
              className=""
              src={liked ? LikedIcon : Icon}
              onClick={handleLikeClick}
              alt="Like"
              width={20}
              height={20}
            />
            <span>Add to Favourite</span>
          </div>

          <div className="flex cursor-pointer" onClick={handleRemove}>
            <span>
              <Image src="/assets/Close.png" width={20} height={20} alt={""} />
            </span>
            <a className=" text-gray-500 ">Remove</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartObject;
