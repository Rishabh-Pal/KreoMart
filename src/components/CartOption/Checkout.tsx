import React from "react";
import ArrowButton from "./ArrowButton";
import Image from "next/image";
import Ticket from "../../../public/assets/Ticket.png";
import { CartDetail, CartItem } from "../../../typings";
interface Props{
  data: CartDetail ;
}

const Checkout = () => {
  const initialdiscount = 0;
  const initialamount = 0;
  // const total_discount = data?.items?.reduce((totalDiscount, item) => {
  //   return totalDiscount + (item.product_variant.discount_price*item.quantity || 0);
  // }, initialdiscount);  
  // const total_amount = data?.items?.reduce((totalAmount, item)=>{
  //   return totalAmount + (item.total || 0);
  // }, initialamount);


  // const discount = total_amount - total_discount;
  // const conveniencefee = 60;
  // const YouPay = data?.total  + conveniencefee - discount;
  // console.log('discount: ', discount);
  // console.log('total_discount: ', total_discount);
  // console.log('total_amount: ', total_amount);
  // console.log('initialamount: ', initialamount);
  // console.log('initialdiscount: ', initialdiscount);

 
  return (
    <div >
    <div className="text-[14px] md:w-[300px] w-[340px] h-[250px] bg-white text-center justify-center checkout">
      <div className="p-4 ">
        <div className="flex gap-4 mb-6">
          <div>
            <Image src={Ticket} alt="co" />
          </div>
          <div className="flex justify-between w-full">
            <div >Apply coupon</div>
            <div>
              <ArrowButton />
            </div>
            
          </div>
        </div>
        <div className="border border-gray-400 border-b-2 mb-6"></div>
        <div className="">
          <div className="flex gap-4 justify-between mb-2">
            <div className="font-bold">Order summary</div>
            <div>AHDT216793SGYEV</div>
          </div>
          <div className="mb-4">
              <div className=" flex justify-between">
                <div className="">Subtotal</div>
                <div className="">₹ 34</div>
              </div>
              <div className=" flex justify-between">
                <div className="">Discount</div>
                <div className="">
                  {/* <Image className="line" alt="Line" src={Line} /> */}
                  <div className="text-[#11DCAD]">-₹ 23</div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="">Convenience fee</div>
                <div className="">₹60</div>
              </div>
          </div>
          <div className="flex text-[#030822] justify-between items-center font-semibold">
                <div> You Pay</div>
                <div className="text-2xl">₹454</div>
              </div>
          <button
                type="submit"
                className="w-full  bg-primary  text-white font-semibold  px-4 py-3 my-6"
              >
                Continue
              </button>
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default Checkout;
