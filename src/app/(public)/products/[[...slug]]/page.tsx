"use client";

import Banner from "@/components/Products/Banner";
import { useParams, useSearchParams } from "next/navigation";
import Loading from "./loading";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useProducts from "@/hooks/useProducts";
import { ProductCard } from "@/components/Products";
import FilterProductlist from "@/components/Products/FilterProductlist";
import { useEffect, useState } from "react";
import SortProductMobile from "@/components/Products/SortProductMobile";
import { Category, Filterdata, Navigation } from "../../../../../typings";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FilterProductMobile from "@/components/Products/FilterProductMobile";
import Icon from "@/components/shared/Icon";
import RadioButton from "@/components/Products/RadioButton";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import GetApis from "@/api/server";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

export const dynamic = "force-dynamic";
export const dynamicParams = false;

const Products = () => {
  console.log(process.env.NEXT_PUBLIC_API_ROOT, "NEXT_PUBLIC_API_ROOT");

  const params = useParams();
  const searchParams = useSearchParams();

  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const handleSort = () => {
    setIsSortOpen(!isSortOpen);
  };

  const handleFilterChange = (filters: Filterdata) => {
    const newparams = `?range_min=${filters.priceRange[500]}&range_max=${filters.priceRange[5000]}`;
    getFilteredProducts(newparams);
    router.push(
      `/products?range_min=${filters.priceRange[500]}&range_max=${filters.priceRange[5000]}`
    );
  };

  const router = useRouter();

  const navigation_header = params?.slug?.[0];
  const cateory = searchParams.getAll("cg");
  const subCategory = searchParams.getAll("sc");
  const name = searchParams.get("search");

  console.log(navigation_header, "navMenu");
  console.log(cateory, "cateory");
  console.log(subCategory, "subCategory");
  console.log(name, "name");

  let filters = {};

  if (navigation_header) {
    filters = {
      ...filters,
      navigation_header: navigation_header,
    };
  }

  if (cateory) {
    filters = {
      ...filters,
      category: [...cateory],
    };
  }

  if (subCategory) {
    filters = {
      ...filters,
      sub_category: [...subCategory],
    };
  }

  if (name) {
    filters = {
      ...filters,
      name: name,
    };
  }

  console.log(filters, "filters");

  // const [data, setData] = useState<PRODUCT | undefined>(undefined)

  const { data: products, isLoading, error } = useProducts(filters);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error</div>;
  }

  // if(!data){
  //   return <div>Loading</div>
  // }

  if (products?.results.length === 0) {
    return <div>No Data</div>;
  }

  function handleNextPageClick() {}
  const radioOptions = [
    { label: "lowest price", value: "lowest price" },
    { label: "highest price", value: "highest price" },
    { label: "recommended", value: "recommended" },
    { label: "What's new", value: "What's new" },
    { label: "discount", value: "option3" },
  ];
  return (
    <div className="relative-container">
      <div className="text-gray-500 text-base justify-center   text-center mt-5 mb-5">
        Home / {navigation_header} / {cateory} / {subCategory}
      </div>
      <Banner />
      <div>
        <div className="hidden md:flex sticky top-0   bg-white h-24 justify-between gap-20 text-lg  ">
          {/* filter and sort trigger */}
          {/* <div
            className="flex gap-4 cursor-pointer mt-6"
            onClick={toggleFilter}
          >
            <h2 className="text-xl text-gray-default">Filter</h2>
            <Icon name="Filters" size={24} />
          </div> */}
          <div className="text-xl text-gray-500 mt-6 justify-end items-end text-end">
            {products?.results.length} Items
          </div>
          <div>
            <div
              className="flex gap-4 cursor-pointer mt-6"
              onClick={handleSort}
            >
              <h2 className="text-xl text-gray-default">Sort</h2>
              <Icon name="Sort" size={24} />
            </div>
            {isSortOpen && (
              <div className="absolute   bg-white z-[1] w-1/6 p-6">
                <div className="flex-row justify-center text-base">
                  <div className="font-medium mb-10">Sort</div>
                  <RadioButton options={radioOptions} />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex  m-4 relative">
          {/* {isFilterOpen && ( */}
          <div className="w-1/5   hidden md:block">
            <FilterProductlist
              filters={{
                navigation_header: navigation_header,
                cateory: cateory,
                subCategory: subCategory,
              }}
              // toggleFilter={toggleFilter}
            />
          </div>
          {/* )} */}

          <div className="flex flex-col m-4 w-full">
            <div
              className={`grid grid-cols-2 sm:grid-cols-2 scroll justify-center items-start  md:grid-cols-5 gap-4
              lg:grid-cols-${isFilterOpen ? 4 : 5} 
              `}
            >
              {products?.results?.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* mobile filter and sort bottom bar  */}
      <div className="flex justify-between sticky bottom-0 w-full md:hidden bg-white ">
        <div className="flex-item mx-auto p-4">
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex text-lg text-gray-default">
                Filter
                <Icon name="Filters" size={24} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="bottom"
              className="sm:max-w-[425px] mt-0 h-full"
            >
              <SheetHeader>
                <SheetTitle className=" items-center flex justify-between  mb-12">
                  <div>Filters</div>
                  <SheetClose>
                    <Icon name="Close" size={20} />
                  </SheetClose>
                </SheetTitle>
              </SheetHeader>
              <DropdownMenuSeparator className="border-t border-gray-300 my-4" />
              <FilterProductMobile
                filters={{
                  navigation_header: navigation_header,
                  cateory: cateory,
                  subCategory: subCategory,
                }}
              />
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex-item mx-auto p-4">
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex text-lg text-gray-default">
                Sort
                <Icon name="Sort" size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="bottom" className="w-full h-full">
              <SheetHeader>
                <SheetTitle className=" items-center flex justify-between  mb-12">
                  <div>Sort</div>
                  <SheetClose>
                    <Icon name="Close" size={20} />
                  </SheetClose>
                </SheetTitle>
              </SheetHeader>
              <SortProductMobile />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Products;

function getFilteredProducts(newparams: string) {
  throw new Error("Function not implemented.");
}

const handlePrevPageClick = async () => {};
