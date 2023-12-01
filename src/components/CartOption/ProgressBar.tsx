"use client";
import React, { useEffect, useState } from "react";

import Tab from "./tab";
import Payment from "./Payment";
import Address from "./Address";
import Cart from "./Cart";
import { useRouter } from "next/navigation";

import { UseCartStore } from "@/store/store";

const ProgressBar = () => {
  const [activeTab, setActiveTab] = useState("Cart");
  const { cart, getAllCart } = UseCartStore((state) => ({
    cart: state.cart, getAllCart: state.getAllCart
  }));
  const router = useRouter();

  const handleTabClick = (label: string) => {
    setActiveTab(label);
  };
  const handleShop = () => {
    router.push("/products");
  };
  useEffect(()=>{
    getAllCart();
  }, [getAllCart])

  return (
    <>
      {cart.cart_item.length != 0 ? (
        <div className="tabs-container my-[52px] ">
          <div className="tabs flex  gap-2 justify-center items-center">
            <div className="flex-item">
              <Tab
                index={1}
                label="Cart"
                activeTab={activeTab}
                onClick={handleTabClick}
              />
            </div>
            <div className="flex-item mb-2 hidden md:block">
              .......................................
            </div>
            <div className="flex-item mb-2 block md:hidden">.............</div>
            <div className="flex-item">
              <Tab
                index={2}
                label="Address"
                activeTab={activeTab}
                onClick={handleTabClick}
              />
            </div>
            <div className="flex-item mb-2 hidden md:block">
              .......................................
            </div>
            <div className="flex-item mb-2 block md:hidden">.............</div>
            <div className="flex-item">
              <Tab
                index={3}
                label="Payment"
                activeTab={activeTab}
                onClick={handleTabClick}
              />
            </div>
          </div>
          <div className="tab-contents">
            {activeTab === "Cart" && <Cart />}
            {activeTab === "Address" && <Address />}
            {activeTab === "Payment" && <Payment />}
          </div>
        </div>
        ) : (
        <div className="flex items-center justify-center h-screen-1/2 mt-5">
          <div className="rounded-md w-[600px] bg-secondary-200 p-8 text-center">
            <div className="text-4xl font-bold mb-4">Oops!</div>
            <div className="text-lg text-gray-600">Your cart is empty</div>
            <button
              className="mt-6 px-8 py-3 bg-primary-800 hover:bg-blue-600 text-white rounded-md focus:outline-none"
              onClick={handleShop}
            >
              Shop now
            </button>
          </div>
        </div>
      )}  
    </>
  );
};

export default ProgressBar;
