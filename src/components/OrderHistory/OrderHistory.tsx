import route from "@/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icon from "../shared/Icon";
import placeholder from "../../../public/assets/placeholder.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

const OrderHistory = () => {
  const delivery_data = [
    {
      type: "Delivered",
      image_src: "/assets/jwel1.png",
      order_id: "AHDT216793SGYEV",
      description: "Pink cotton top",
      size: "S",
      date: "2nd May 2023, Sat",
    },
    {
      type: "Cancelled",
      image_src: "/assets/jwel2.png",
      order_id: "AHDT216793SGYEV",
      description: "Pink cotton top",
      size: "S",
      date: "2nd May 2023, Sat",
    },
    {
      type: "Refund initiated",
      image_src: "/assets/sh1.png",
      order_id: "AHDT216793SGYEV",
      description: "Pink cotton top",
      size: "S",
      date: "2nd May 2023, Sat",
    },
    {
      type: "Refund credited",
      image_src: "/assets/sh2.png",
      order_id: "AHDT216793SGYEV",
      description: "Pink cotton top",
      size: "S",
      date: "2nd May 2023, Sat",
    },
    {
      type: "Exchange delivered",
      image_src: "/assets/womenSuit.PNG",
      order_id: "AHDT216793SGYEV",
      description: "Pink cotton top",
      size: "S",
      date: "2nd May 2023, Sat",
    },
  ];
  return (
    <div>
      <div className=" hidden md:block">
        <div className="flex justify-center gap-8 p-20">
          <div className=" bg-white p-4 relative h-2/5">
            <div className="flex w-96 justify-between items-center text-base mb-5">
              <div>My Orders</div>
              <Link href={route.OrderHistory}>
                <Icon name="ArrowRight" size={24} />
              </Link>
            </div>
            <div className="flex w-96 justify-between items-center text-base my-5">
              <div>Account settings</div>
              <Link href={route.Profile}>
                <Icon name="ArrowRight" size={24} />
              </Link>
            </div>
            <div className="flex w-96 justify-between items-center text-base my-5">
              <div>Contact us</div>
              <Link href={route.Contact}>
                <Icon name="ArrowRight" size={24} />
              </Link>
            </div>
            <div className="flex w-96 justify-between items-center text-base my-5">
              <button>Log out</button>
            </div>
          </div>
          <div className="md:w-[500px] lg:w-[800px] flex flex-col items-center justify-start gap-[24px] text-sm">
            <div className="self-stretch flex flex-row items-start justify-center gap-[24px] text-base">
              <div className="flex-1 items-center  box-border  overflow-hidden flex flex-row p-3  justify-end gap-[12px] border-[1px] border-solid border-gray-500 text-gray-600">
                <Icon name={"search"} size={20} />
                <input
                  type="text"
                  placeholder=" Search in orders"
                  className="flex-1 relative leading-[130%] bg-transparent outline-none flex items-center h-[22.67px] bg-background"
                />
              </div>
              <Dialog>
                <DialogTrigger
                  asChild
                  className="flex flex-row py-4 items-center justify-center gap-1 text-gray-default border-[1px]  border-solid border-gray-500"
                >
                  <Button
                    variant="outline"
                    className="relative  text-lg font-normal py-7 rounded-none justify-center text-center items-center"
                  >
                    {" "}
                    Filter <Icon name={"Filters"} size={20} />{" "}
                  </Button>
                </DialogTrigger>
                <DialogContent className="right-20 transform h-56 ">
                  <DialogHeader>
                    <DialogTitle> Status</DialogTitle>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              {/* <div className="flex flex-row p-3 items-center justify-center gap-[4px] text-gray-default border-[1px] border-solid border-gray-500">
                <div className="relative  text-base font-normal">Filter</div>

                <Icon name={"Filters"} size={20} />
              </div> */}
            </div>
            <div className="  self-stretch flex flex-col items-center justify-start gap-2  text-gray-600">
              {delivery_data.map((item, index) => {
                return (
                  <div
                    className="self-stretch  flex flex-row p-6 items-start justify-start gap-6 mb-6 bg-white my-2 "
                    key={index}
                  >
                    <Image
                      alt=""
                      src={item.image_src}
                      placeholder="blur"
                      blurDataURL={placeholder.src}
                      width={98}
                      height={115}
                    />
                    <div className="flex-1 h-[115px] flex flex-col items-start justify-between">
                      <div className="self-stretch flex flex-row items-baseline justify-start gap-[16px] text-lg text-grey-scale-black-russian">
                        <div className="flex-1 relative tracking-[-0.4px] leading-[130%] font-medium">
                          {item.type}
                        </div>
                        <div className="relative text-sm leading-[130%] text-grey-scale-carbon-gray text-right">
                          Order ID: {item.order_id}
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                        <div className="self-stretch relative leading-[130%]">
                          {item.description}
                        </div>
                        <div className="self-stretch relative leading-[130%]">
                          Size: {item.size}
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[24px]">
                        <div className="flex-1 relative leading-[130%]">
                          {item.date}
                        </div>
                        <Link href={route.OrderDetails}>
                          <Image
                            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/assets/Arrow Right.png"
                            width={24}
                            height={24}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-row py-4 px-6 items-center justify-center text-base text-center text-gray-default border-[1px] border-solid border-gray-default">
              <div className="relative leading-[130%]">Load more</div>
            </div>
          </div>
        </div>
      </div>

      {/*  mobile view  */}

      <div className="block md:hidden ">
        <div className="flex justify-center mx-0 text-base items-center gap-6 my-6 px-8">
          <Link className="underline cursor-pointer" href={route.OrderHistory}>
            My orders
          </Link>
          <Link className="underline cursor-pointer" href={route.Profile}>
            Account setting
          </Link>
          <Link className="underline cursor-pointer" href={route.Contact}>
            Contact us
          </Link>
          <Link className="underline cursor-pointer" href={route.OrderHistory}>
            Log out
          </Link>
        </div>
        <div className=" flex flex-col items-center justify-start gap-[24px] text-sm text-gray-500 p-8">
          <div className="self-stretch flex flex-row items-start justify-center gap-[24px] text-base">
            <div className="flex-1 bg-background box-border  overflow-hidden flex flex-row p-3 items-end justify-end gap-[12px] border-[1px] border-solid border-gray-500">
              <Icon name={"search"} size={20} />
              <input
                type="text"
                placeholder=" Search in orders"
                className=" flex-1 relative leading-[130%] flex items-center h-[22.67px] outline-none bg-background text-gray-600 "
              />
            </div>
            <div className=" flex flex-row p-3 items-center justify-center gap-[4px] text-gray-700 border-[1px] border-solid border-gray-500">
              <div className="relative leading-[130%]">Filter</div>

              <Icon name={"Filters"} size={20} />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[8px] text-gray-500 text-base font-normal">
            {delivery_data.map((item, index) => {
              return (
                <div
                  className="self-stretch bg-grey-scale-white flex flex-row p-6 items-start justify-start gap-[24px] bg-white my-4"
                  key={index}
                >
                  <Image
                    alt=""
                    src={item.image_src}
                    placeholder="blur"
                    blurDataURL={placeholder.src}
                    width={98}
                    height={115}
                  />
                  <div className="flex-1 h-[115px] flex flex-col items-start justify-between">
                    <div className="self-stretch flex flex-row items-baseline justify-start gap-4 text-lg text-gray-default">
                      <div className="flex-1 relative tracking-[-0.4px] leading-[130%] font-medium">
                        {item.type}
                      </div>
                      <div className="relative text-sm leading-[130%] text-gray-600 text-right">
                        Order ID: {item.order_id}
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[130%]">
                        {item.description}
                      </div>
                      <div className="self-stretch relative leading-[130%]">
                        Size: {item.size}
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[24px]">
                      <div className="flex-1 relative leading-[130%]">
                        {item.date}
                      </div>
                      <Link href={route.OrderDetails}>
                        <Image
                          className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/assets/Arrow Right.png"
                          width={24}
                          height={24}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row py-4 px-6 items-center justify-center text-center text-gray-default border-2 border-solid border-gray-default">
            <div className="relative leading-[130%] text-base font-normal">
              Load more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
