import React from "react";
import Products from "../BestSeller/Products";
import Myfav_Card from "./Myfav_Card";
import { UseCartStore } from "@/store/store"; 

const MyFav = () => {
  const {cart, getAllCart} = UseCartStore((state) => ({cart: state.cart, getAllCart: state.getAllCart}));
  return (
    <div className="bg-[#FAF9F8] py-8">
    <div className="container">
 
      {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
      <div className="flex flex-wrap gap-2 justify-center ">
      {cart?.cart_item.map((data, index) => (
        <div key={index}>
          <Myfav_Card data={data}/>
        </div>
        ))}
        </div>
    </div>
  </div>
  );
};

export default MyFav;
