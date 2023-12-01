"use client";
import React, { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast"; 
import Image from "next/image";
import Related_products from "./Related_products";
import { ProductDetail } from "../../../typings";
import Tab from "./tab";
import Description from "./Description";
import Additionalinfo from "./Additionalinfo"; 
import Review from "./Review"; 
import { useRouter } from "next/navigation";
import {UseCartStore} from "@/store/store"
import SingleProductContent from "./SingleProductContent";

type Props = {
  detail: ProductDetail | undefined;
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

const SingleProduct_details: React.FC<Props> = ({ detail }) => {
  const [assets, setAssets] = useState<string[]>([]);
  // const [productDetailData, setProductDetailData] = useState({ ...detail });
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedprice, setSelectedPrice] = useState(0);
  const [selectSize, setSelectSize] = useState<string[]>([]);
  const [shouldRerender, setShouldRerender] = useState(false);
  const [liked, setLiked] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  // console.log(productDetailData, "product detail");
  const productDetailData = {...detail};
  const {addToCart} = UseCartStore((state)=>({addToCart: state.addToCart}))

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

  const handleAddToCart = async () => {
    try { 
      const accessToken = localStorage.getItem("access_token");
      
      if (!accessToken) { 
        router.push("/login");
        return;
      } 
      if (ArrayVariant && ArrayVariant.length > 0) {
        const productVariant = ArrayVariant[0]; 
        toast({
          title: `${productDetailData.name}`,
          description: ` ${productDetailData?.description}`,
        }); 
        const productToAddToCart = {
          product_variant: productVariant.id,
          quantity: productVariant.quantity,
        }; 
        const cartData = await addToCart(productToAddToCart); 
        console.log("Cart added data:", cartData);
        console.log("Product detail data:", productToAddToCart);
   
        setShouldRerender(!shouldRerender); 
        console.log("Product detail data: ", productToAddToCart);
      } else { 
        console.log("ArrayVariant is empty or undefined");
      }
    } catch (error) { 
      console.error("Error adding product to cart:", error); 
    }
  };
  

  const [activeTab, setActiveTab] = useState("Description");

  const handleTabClick = (label: string) => {
    setActiveTab(label);
  };
  console.log(ArrayVariant);
  useEffect(() => {}, [shouldRerender]);
  return (
    <div className="justify-center">
      <SingleProductContent detail = {detail} handlecart= {handleAddToCart}/>

      <div className="tabs-container px-6  mx-auto my-8 xl:max-w-[1100px] mt-10">
        <div className="tabs flex flex-wrap gap-12 sm:lg:gap-x-[150px] snap-x scroll-auto">
          <div className="flex-item snap-center">
            <Tab
              label="Description"
              activeTab={activeTab}
              onClick={handleTabClick}
            />
          </div>
          <div className="flex-item snap-center">
            <Tab
              label="Additional Info"
              activeTab={activeTab}
              onClick={handleTabClick}
            />
          </div>
          <div className="flex-item snap-center">
            <Tab
              label="Review"
              activeTab={activeTab}
              onClick={handleTabClick}
            />
          </div>
        </div>
        <div className="tab-contents ">
          {activeTab === "Description" && <Description />}
          {activeTab === "Additional Info" && <Additionalinfo />}
          {activeTab === "Review" && <Review />}
        </div>
      </div>

      <Related_products />
    </div>
  );
};

export default SingleProduct_details;
