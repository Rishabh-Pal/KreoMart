"use client";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import fetchProducts from "@/Utils/fetchProducts";
import Image from "next/image";
import filter from "../../../public/assets/Filters.png"
import arrowdown from "../../../public/assets/Arrow Down.png"
// import Filter from "./Filter";

interface Product {
  slug: string;
  name: string;
  price: number;
  assets: { preview_image: string }[];
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products and update the state
    const fetchAndSetProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchAndSetProducts();
  }, []); // Run this effect only once on component mount

  console.log({ products });
  return (
    <div className="flex gap-8 m-4">
      {/* Sidebar */}
      <div className="w-1/4">
        {/* <form action=""></form> */}
        {/* <Filter /> */}
        {/* <Filter/> */}
      </div>

      {/* Product Listing */}
      {/* <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
        {products?.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div> */}
      <div>
        <div className="flex justify-between items-center">
          <div>
          number of products
          </div>
        <div className="flex gap-3">
          <div className="flex">
            <div>Filter</div>
            <div>
              <Image src={filter} alt="filter" className="w-[20px] items-center my-[1px] mx-[2px]"/>
            </div>
          </div>
          <div className="flex">
            <div>Sort by</div>
            <div>
              <Image src={arrowdown} alt="filter" className="w-[20px] items-center my-[1px] mx-[2px]"/>
            </div>
          </div>
        </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {products?.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className=" items-center p-6">
        <button className="flex bg-[#020044] text-white mx-auto">
          <div className="mx-2 p-2">Load more</div>
          <div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="arrow-right">
                <path
                  id="Vector 190"
                  d="M14.5 16L18.5 12M18.5 12L14.5 8M18.5 12L6.5 12"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
        </button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
