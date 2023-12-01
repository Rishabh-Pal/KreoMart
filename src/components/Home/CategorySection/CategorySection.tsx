import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { Carousel } from "@mantine/carousel";
import Pagination from "../../BestSeller/Pagination";

export interface CategoryType {
  id: number;
  name: string;
  image: string;
}

const CategoryData: CategoryType[] = [
  {
    id: 1,
    name: "Laptop",
    image: "/assets/Laptopbag.jpg",
  },
  {
    id: 2,
    name: "Jeans2",
    image: "/assets/jeans2.PNG",
  },
  {
    id: 3,
    name: "Necklace",
    image: "/assets/jwel1.PNG",
  },
  {
    id: 4,
    name: "Boot",
    image: "/assets/sh2.PNG",
  },
  {
    id: 5,
    name: "Suit",
    image: "/assets/womenSuit.PNG",
  },
  {
    id: 6,
    name: "Jeans",
    image: "/assets/jeans1.PNG",
  },
  {
    id: 7,
    name: "Jeans2",
    image: "/assets/jeans2.PNG",
  },
  {
    id: 8,
    name: "Necklace",
    image: "/assets/jwel1.PNG",
  },
  {
    id: 9,
    name: "Boot",
    image: "/assets/sh2.PNG",
  },
  {
    id: 10,
    name: "Suit",
    image: "/assets/womenSuit.PNG",
  },
];

export const Categories = () => {
  const [products, setProducts] = useState<CategoryType[]>(CategoryData);
  const handleprev = () => {};

  return (
    <>
      <div className="flex mb-16  justify-between  items-start  box-border ">
        <h1 className="  relative text-2xl tracking-[-0.6px] leading-[120%] font-medium  text-left inline-block text-gray-default">
          Categories
        </h1>
        {/* <Pagination /> */}
      </div>
      <Carousel
        withIndicators
        // height={420}
        slideSize="20%"
        slideGap="md"
        loop
        align="start"
        slidesToScroll={4}
      >
        {products.map((ele) => {
          // console.log(ele);
          return (
            <Carousel.Slide key={ele.id}>
              <CategoryCard products={ele} />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </>
  );
};
