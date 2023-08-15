"use client";

// import { ProductData, ProductsType } from "../../../typings";
import { Categories } from "./Categories";
import { Explore } from "./Explore";

// const CategoryData: ProductsType[] = [
//   {
//     id: 1,
//     name: "string",
//     description:
//       "We started with humble beginnings — Your one-stop shop for trendy products and exclusive deals.",
//     price: "string",
//     brand: "string",
//     image: "/assets/hero_img.png",
//     category: "",
//     quantity: 3,
//   },
// ];

export const NewArrivals = () => {
  return (
    <div className="">
      {/* {CategoryData.map((hero) => (
        <Categories key={hero.id} />
      ))} */}
      <Categories/>
      <Explore />
    </div>
  );
};
