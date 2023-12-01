"use client";
import React, { useEffect, useState } from "react";

import CartObject from "./CartObject";
import Checkout from "./Checkout";
import { UseCartStore } from "@/store/store";
import { CartDetail } from "../../../typings";
  

const Cart = () => {
  const { cart, getAllCart } = UseCartStore((state)=>({cart:state.cart, getAllCart:state.getAllCart}));

  useEffect(()=>{
    getAllCart();
  }, [getAllCart])
  console.log("this is cart store data: ", cart);
  return (
    <>
      <div className="flex flex-col gap-6 md:flex-row m-auto justify-center p-4 text-center">
        {/* <div className="flex-row w-1/2 m-auto  bg-white "> */}
        <div className="flex-item w-[340px] md:w-[600px] relative bg-white flex-row mx-auto md:mx-0 justify-center gap-[12px] p-4 text-base ">
          {cart?.cart_item?.map((item, index) => (
            <div key={index}>
              <CartObject data={item} />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Checkout />
        </div>
      </div>
      
    </>
  );
};

export default Cart;
