"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; 
import Icon from "@/components/shared/Icon";
import Button from "@/components/shared/Button/Button";
import { UseCartStore } from "@/store/store"; 
import { useEffect } from "react";

const CartDropdown = () => {
  const router = useRouter();
  const {cart, getAllCart} = UseCartStore((state) => ({cart: state.cart, getAllCart: state.getAllCart}));

  const handleToCart = () => {
    router.push("/cart");
  };
  useEffect(()=>{
    getAllCart();
  },[getAllCart])
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" ">
        <Icon name={"Bag"} size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[350px] bg-white rounded-none">
        <div
          className="overflow-y-auto" // Add this class to enable scrolling
          style={{ maxHeight: "75vh" }} // Set a maximum height to enable scrolling when the content exceeds this height
        >
          {cart?.cart_item.map((data, index) => (
            <div key={index} className="bg-white shadow-md  p-4 mb-4 ">
              <div className="flex justify-between">
                <div className="flex relative justify-between flex-1">
                  <div className="bg-white">
                    <div className="relative w-20 h-20">
                      <Image
                        src={data.product_variant.preview_image}
                        alt=""
                        fill={true}
                        className="w-full h-full object-cover "
                      />
                    </div>
                    <div className="">
                      <p className="text-gray-900 font-semibold">{data.id}</p>
                      <h1 className="text-gray-900 font-bold text-lg">
                        ${data.product_variant.price}
                      </h1>
                    </div>
                  </div>

                  <div className="bg-blue-500 mt-8  p-2">
                    <Button>
                      {" "}
                      <span className="font-semibold">Quantity: </span>
                      {data.quantity}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center py-2 mb-2 ">
          <div>
            <Button
              className="bg-primary-default hover:bg-primary-light   rounded-none"
              onClick={handleToCart}
            >
              Go to Cart
            </Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CartDropdown;
