
import React from "react";
import Checkout from "./Checkout";
// import { UseCartStore } from "@/store/store";
import Image from "next/image";
import { CartDetail } from "../../../typings";

function Payment() {
  // const getAllCart = UseCartStore((state) => state.getAllCart);
  // const cart = UseCartStore((state)=>state.cart);
  // const [cartData, setCartData] = useState<CartDetail | undefined>(cart);

  // useEffect(() => {
  // const fetchData = async () => {
  //   const data = await getAllCart();
  //   setCartData(data);
  // };

  //   fetchData();
  // }, [getAllCart]);
  return (
    <div className="flex flex-col gap-6 md:flex-row m-auto justify-center p-4 text-center">
      <div className="flex-item w-[340px] md:w-[600px] relative bg-white flex-row p-6 box-border mx-auto md:mx-0  gap-[24px] text-left text-base text-grey-scale-black-russian font-medium-16">
        <div className="self-stretch relative text-2xl font-medium mb-8">
          Payment mode
        </div>
        <div className="text-start mb-6">
          How would you like to pay?
        </div>
        <div className="self-stretch flex justify-between items-start  gap-[16px] mb-16">
          <div className="self-stretch items-center justify-start gap-[24px] ">
            <div className="relative tracking-[-0.4px] leading-[130%] font-medium mb-6">
              Online Payment
            </div>

            <div className="flex items-center justify-start gap-[12px]">
              <Image
                className="relative w-[43.73px] h-8 "
                alt=""
                src="assets/visa.svg"
                width={25}
                height={25}
              />
              <Image
                className="relative w-[43.73px] h-8 "
                alt=""
                src="assets/mastercard.svg"
                width={25}
                height={25}
              />
              <Image
                className="relative w-[43.73px] h-8 "
                alt=""
                src="assets/rupay.svg"
                width={25}
                height={25}
              />
              <Image
                className="relative w-[43.73px] h-8 "
                alt=""
                src="assets/upi.svg"
                width={25}
                height={25}
              />
            </div>
          </div>
          <div>
            <Image
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/assets/radio on.svg"
                width={25}
                height={25}
              />
          </div>
        </div>
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-grey-scale-smoke-white" />
        <div className="self-stretch flex flex-row items-center justify-start gap-[24px]">
          <div className="flex-1 relative tracking-[-0.4px] leading-[130%] font-medium">
            Cash on Delivery
          </div>
          <Image
            className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
            alt=""
            src="/assets/radio on.svg"
            width={25}
            height={25}
          />
        </div>
      </div>

      <div className="flex justify-center"><Checkout /></div>
    </div>
  );
}

export default Payment;

// const Payment = () => {
//   return (
//     <div>Payment</div>
//   )
// }

// export default Payment
