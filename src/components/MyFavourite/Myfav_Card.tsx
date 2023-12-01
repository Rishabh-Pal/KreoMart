"use client";

import React from "react";
import Products from "../BestSeller/Products";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "../shared/Icon";

interface Props{
  data: any
}

const Myfav_Card:React.FC<Props> = ({data}) => {
  // const handleSizeChange = (newSize) => {
  //   setSize(newSize);
  // };

  return (
    <div className="w-[200px] text-[14px]">
      <Products />
      <div>color</div>
      <div className="">
        <select name="size" id="size-select" className="flex gap-2 p-2 w-full">
          <option value="">Select size</option>
          <option value="xs">XS</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
          <option value="xxl">XXL</option>
        </select>
      </div>
      <button className="flex gap-2 p-4 w-full h-[20px] bg-[#020044] text-white items-center justify-center">
        <Icon name={"Bag-white"} size={23} />
        <div>
          <Dialog>
            <DialogTrigger>Add</DialogTrigger>
            <DialogContent className="justify-center text-center">
              <DialogHeader>
                <DialogTitle className="justify-center text-center">
                  Notify me
                </DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div>
                <h1>We will email you when your product is available</h1>
                <div className="">
                  <select
                    name="size"
                    id="size-select"
                    className="flex gap-2 p-2 w-full"
                  >
                    <option value="">size</option>
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                  </select>
                </div>
                <div>We will notify you at:</div>
                <p>abcd@gmail.com</p>

                <button className="flex gap-2 p-4 w-full bg-[#020044] text-white justify-center">
                  <Icon name={"Bag"} size={5} />
                  Notify me
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </button>
    </div>
  );
};

export default Myfav_Card;
