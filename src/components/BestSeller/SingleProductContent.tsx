"use client";

import React, { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Icon from "../../../public/assets/Favourite=False.png";
import LikedIcon from "../../../public/assets/Favourite-liked.png";
import Image from "next/image";
import Related_products from "./Related_products";
import { ProductDetail } from "../../../typings";
import Tab from "./tab";
import Description from "./Description";
import Additionalinfo from "./Additionalinfo";
import Review from "./Review";
import Stars from "./stars";
import { useRouter } from "next/navigation";
import { UseCartStore } from "@/store/store";
type Props = {
  detail: ProductDetail | undefined;
  handlecart: () => void;
};
interface ProductVariant {
  id: number;
  color: string;
  size: string;
  price: number;
  discount_price: number;
  quantity: number;
  assets: string[];
  preview_image: string;
}
[];
const SingleProductContent: React.FC<Props> = ({ detail, handlecart }) => {
  const [assets, setAssets] = useState<string[]>([]);
  const [productDetailData, setProductDetailData] = useState({ ...detail });
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedprice, setSelectedPrice] = useState(0);
  const [selectSize, setSelectSize] = useState<string[]>([]);
  const [shouldRerender, setShouldRerender] = useState(false);
  const [liked, setLiked] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const { addToCart } = UseCartStore((state) => ({
    addToCart: state.addToCart,
  }));

  const ArrayVariant = productDetailData.product_variant;
  const handleColorButtonClick = (data: ProductVariant) => {
    setSelectedImage(data.preview_image);
    setAssets(data.assets);
    setSelectedPrice(data.price);
    if (ArrayVariant) {
      const matchingSizes: string[] = ArrayVariant.filter(
        (item) => item.color === data.color
      ).map((item) => item.size);
      setSelectSize(matchingSizes.length > 0 ? matchingSizes : []);
    }
  };

  function handleAddToWishlist(): void {
    setLiked(!liked);
  }
  const [activeTab, setActiveTab] = useState("Description");

  const handleTabClick = (label: string) => {
    setActiveTab(label);
  };
  console.log(ArrayVariant);
  useEffect(() => {}, [shouldRerender]);
  return (
    <div>
      <div className="mx-auto my-8 xl:max-w-[1100px] flex flex-col md:flex-row justify-center ">
        <div className=" flex flex-col md:flex-row lg:w-1/2 justify-center">
          <div className="hidden md:block flex-row md:flex-col p-2 mr-4">
            {assets.map((item, id) => (
              <div className="w-full flex justify-center" key={id}>
                <Image
                  src={`https://kreomart.s3.ap-south-1.amazonaws.com/static/${item}`}
                  alt="shoes"
                  onClick={() =>
                    setSelectedImage(
                      `https://kreomart.s3.ap-south-1.amazonaws.com/static/${item}`
                    )
                  }
                  width={80}
                  height={80}
                  className="mb-4 justify-center"
                />
              </div>
            ))}
          </div>

          <div className="w-full mb-3 px-6 md:px-0 flex lg:justify-start justify-center">
            <Image
              className="w-full md:max-h-[700px]"
              src={selectedImage || productDetailData?.preview_image || ""}
              alt={`${selectedImage || productDetailData?.preview_image}`}
              width={400}
              height={610}
            />
          </div>
          <div className="md:hidden flex gap-4 p-2 mx-6">
            {assets.map((item, id) => (
              <div className=" flex justify-start" key={id}>
                <Image
                  src={`https://kreomart.s3.ap-south-1.amazonaws.com/static/${item}`}
                  alt="shoes"
                  onClick={() =>
                    setSelectedImage(
                      `https://kreomart.s3.ap-south-1.amazonaws.com/static/${item}`
                    )
                  }
                  width={60}
                  height={60}
                  className="w-26 md:w-20 justify-center"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="px-6 lg:w-1/2">
          <div className="">
            <h1 className="text-2xl md:text-3xl text-[#030822] font-medium">
              {productDetailData?.name}
            </h1>
            <p className="text-gray-default text-base font-normal mb-4">
              {productDetailData?.category}
            </p>
            <p className="text-gray-default text-base font-normal mb-4">
              {productDetailData?.description}
            </p>
            <div className="flex gap-x-[8px]">
              <Stars />
              <span className="text-base text-gray-600 underline underline-offset-4 underline-gray-500">
                16 Review
              </span>
            </div>
            <p className="border-b-2 space-x-4">
              <span className="text-[20px] md:text-[32px] font-medium pr-2 text-gray-default">
                ₹ {productDetailData?.product_variant?.[0].discount_price}
              </span>
              <span className="line-through text-[14px] md:text-[16px] font-medium text-gray-500">
                ₹ {selectedprice}
                {}
              </span>
            </p>
          </div>
          <div className="">
            <div className="md:justify-between md:gap-x-8 mt-2 items-center pb-5 border-b-2 border-gray-100 mb-6">
              <div className="mb-[24px]">
                <div className="mr-3 mb-[12px] text-[14px] font-medium">
                  Colour
                </div>
                <div className="flex gap-1">
                  {ArrayVariant?.map((item, id) => (
                    <div key={id} onClick={() => handleColorButtonClick(item)}>
                      <button
                        className={` border-[1px] border-gray-700 border-${item.color}-300 h-[32px] w-[32px] focus:outline-none`}
                      >
                        {" "}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="items-center">
                <span className="mr-3 mb-[12px] text-base font-medium">
                  Size
                </span>
                <div className="flex gap-1 md:gap-2">
                  {selectSize?.map((item, id) => (
                    <div
                      key={id}
                      className="flex items-center justify-center h-[34px] w-[40px] border-[1px] border-gray-700 text-center text-base"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div></div>
              </div>
            </div>
          </div>

          <div className=" flex gap-6 md:gap-6  text-sm">
            <button
              className="flex items-center justify-center border-2 border-black py-4 px-2  w-full"
              onClick={() => handleAddToWishlist()}
            >
              <div className="mx-2">
                <Image
                  src={liked ? LikedIcon : Icon}
                  alt="favourite"
                  width={20}
                  height={20}
                />
              </div>
              <div>Add to Wishlist</div>
            </button>
            <button
              className="flex items-center justify-center text-white bg-[#020044] py-4 px-6  w-full"
              onClick={() => handlecart()}
            >
              <div className="mx-2">
                <Image
                  src="/assets/BagCart.svg"
                  alt="favourite"
                  width={20}
                  height={20}
                />
              </div>
              <div>Add To Cart</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductContent;
