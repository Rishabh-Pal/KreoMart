"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  PriceOptions,
  CategoryOptions,
  Category,
  Navigation,
} from "../../../typings";
import useNavigation from "@/hooks/useNavigation";
import useCategories from "@/hooks/useCategories";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { filterProps } from "@mantine/core";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import route from "@/routes";

// import { RemoveFormatting } from "lucide-react";

interface Filterdata {
  navigation_header?: string;
  cateory?: string[];
  subCategory?: string[];
  name?: string;
  colors?: string;
  sizes?: string;
  priceRange?: PriceOptions;
}
interface FilterProductListProps {
  // toggleFilter: () => void;
  filters?: Filterdata;
}

const FilterProductlist: React.FC<FilterProductListProps> = ({
  // toggleFilter,
  filters,
}) => {
  const router = useRouter();
  const navigationQuery = useNavigation();
  const categoriesQuery = useCategories();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (navigationQuery.isLoading || categoriesQuery.isLoading) {
    return <div>Loading...</div>;
  }
  if (navigationQuery.isError || categoriesQuery.isError) {
    return <div>Error...</div>;
  }

  const nav = navigationQuery.data?.filter((nav: Navigation) => {
    if (nav.id.toString() == filters?.navigation_header) {
      return nav.categories;
    }
  });

  console.log(nav, "nav");

  const categories = categoriesQuery.data?.filter((item: Category) =>
    nav?.[0]?.categories.some((itemd) => itemd.id === item.id)
  );

  const subCategoris = categories
    ?.filter((item: Category) =>
      searchParams.getAll("cg").includes(item.id.toString())
    )
    .reduce(
      (arr: { name: string; id: number }[], item: Category) =>
        (arr = [...arr, ...item.sub_categories]),
      []
    );

  console.log(subCategoris, "subCategoris");

  console.log(categories, "categories");
  console.log(navigationQuery.data, "navigationQuery.data");
  console.log(categoriesQuery.data, "categoriesQuery.data");
  console.log(filters?.navigation_header, "filters?.navigation_header");

  // const handleClose = () => {
    // toggleFilter();
  // };

  return (
    <div className=" p-4 rounded-none text-lg mx-8 ">
      <div className="justify-center">
        <div className=" mb-2 flex justify-between">
          <h3 className="text-lg font-semibold ">Filter</h3>
          {/* <Image
            src="/assets/Close.svg"
            alt={"Close"}
            className="cursor-pointer"
            onClick={handleClose}
            width={18}
            height={18}
          /> */}
        </div>

        <fieldset className="mb-4">
          <label className="block font-semibold">Categories</label>
          {categories?.map((item: Category, i) => (
            <div key={i}>
              <input
                className=" w-7 h-7 ring-0  accent-secondary-900 rounded  mr-4"
                type="checkbox"
                checked={searchParams.getAll("cg").includes(item.id.toString())}
                onChange={(e) => {
                  console.log(e.target.checked, "e.target.checked");
                  if (e.target.checked) {
                    const cur = new URLSearchParams(
                      Array.from(searchParams.entries())
                    );
                    if (cur.getAll("cg").includes(item.id.toString())) {
                      return;
                    }
                    cur.append("cg", item.id.toString());
                    router.push(`${pathname}?${cur.toString()}`);
                  } else {
                    const cur = new URLSearchParams(
                      Array.from(searchParams.entries())
                    );
                    const cg = cur.getAll("cg");
                    cur.delete("cg");
                    cg.filter((id) => id !== item.id.toString()).map((id) => {
                      cur.append("cg", id.toString());
                    });
                    router.push(`${pathname}?${cur.toString()}`);
                  }
                }}
              />
              <label className="text-lg">{item.name}</label>
            </div>
          ))}
        </fieldset>
        <fieldset className="mb-4">
          <label className="block font-semibold">Sub Categories</label>
          {subCategoris?.map((item: { name: string; id: number }, i) => (
            <div key={i} className="items-baseline">
              <input
                type="checkbox"
                className="w-7 h-7 accent-secondary-900 rounded-none mr-4  "
                checked={searchParams.getAll("sc").includes(item.id.toString())}
                onChange={(e) => {
                  console.log(e.target.checked, "e.target.checked");
                  if (e.target.checked) {
                    console.log("if");
                    const cur = new URLSearchParams(
                      Array.from(searchParams.entries())
                    );
                    if (cur.getAll("sc").includes(item.id.toString())) {
                      return;
                    }
                    cur.append("sc", item.id.toString());
                    router.push(`${pathname}?${cur.toString()}`);
                  } else {
                    console.log("else");
                    const cur = new URLSearchParams(
                      Array.from(searchParams.entries())
                    );
                    const sc = cur.getAll("sc");
                    cur.delete("sc");
                    sc.filter((id) => id !== item.id.toString()).map((id) => {
                      cur.append("sc", id.toString());
                    });

                    router.push(`${pathname}?${cur.toString()}`);
                  }
                }}
              />
              <label className="text-lg ">{item.name}</label>
            </div>
          ))}
        </fieldset>
        {/* Color */}
        <div className="mb-4">
          <label className="block font-semibold">Colour</label>
          <div>
            <button
              className={`mx-1 border-2 border-red-300 w-[32px] h-[32px] focus:outline-none `}
            ></button>
            <button
              className={`mx-1 border-2 border-yellow-300 w-[32px] h-[32px] focus:outline-none `}
            ></button>
            <button
              className={`mx-1 border-2 border-orange-300 w-[32px] h-[32px] focus:outline-none `}
            ></button>
            <button
              className={`mx-1 border-2 border-green-300 w-[32px] h-[32px] focus:outline-none `}
            ></button>
          </div>
        </div>
        {/* Size */}
        <div className="mb-4">
          <label className="block font-semibold">Size</label>
          <div className="flex gap-1 md:gap-2">
            <div
              className={`flex items-center justify-center h-[34px] w-[40px] border-[1px] border-gray-300 text-center`}
            >
              SM
            </div>
            <div
              className={`flex items-center justify-center h-[34px] w-[40px] border-[1px] border-gray-300 text-center `}
            >
              M
            </div>
            <div
              className={`flex items-center justify-center h-[34px] w-[40px] border-[1px] border-gray-300 text-center `}
            >
              L
            </div>
            <div
              className={`flex items-center justify-center h-[34px] w-[40px] border-[1px] border-gray-300 text-center `}
            >
              XL
            </div>
          </div>
        </div>
        {/* Price */}
        <div className="mb-4">
          <label className="block font-semibold">Price</label>
          <fieldset name="price">
            {["piyush", "mishra"].map((option) => (
              <div key={option}>
                <label>{option}</label>
              </div>
            ))}
          </fieldset>
        </div>
        <div className=" mb-4 mt-4 justify-start">
          <button className="bg-blue-500 border border-black text-black  py-2 px-4 rounded-md items-start">
            Clear Filter <span>(n)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterProductlist;
