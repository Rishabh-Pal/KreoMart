"use client";
import React, { useState } from "react";
import checked from "../../../public/assets/Checked.svg";
import check from "../../../public/assets/Checkbox.svg";
import Image from "next/image";
import { Categories } from "../Home/CategorySection/CategorySection";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useNavigation from "@/hooks/useNavigation";
import useCategories from "@/hooks/useCategories";
import { Category, Navigation } from "../../../typings";

interface PriceOptions {
  under500: boolean;
  between500and1000: boolean;
  between1000and1500: boolean;
}

interface Filterdata {
  navigation_header?: string;
  cateory?: string[];
  subCategory?: string[];
  name?: string;
  colors?: string;
  sizes?: string;
  priceRange?: PriceOptions;
}

interface FilterProductMobileProps {
  filters?: Filterdata;
}

const FilterProductMobile: React.FC<FilterProductMobileProps> = ({
  filters,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [colorChecked, setColorChecked] = useState(false);
  const [sizeChecked, setSizeChecked] = useState(false);
  const [priceOptions, setPriceOptions] = useState<PriceOptions>({
    under500: false,
    between500and1000: false,
    between1000and1500: false,
  });

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

  const handleCategoryCheckbox = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleColorCheckbox = () => {
    setColorChecked(!colorChecked);
  };

  const handleSizeCheckbox = () => {
    setSizeChecked(!sizeChecked);
  };

  const handlePriceCheckbox = (option: keyof PriceOptions) => {
    setPriceOptions({
      ...priceOptions,
      [option]: !priceOptions[option],
    });
  };

  return (
    <div className="bg-gray-100 text-[12px] p-4 rounded-lg">
      <fieldset className="mb-4">
        <label className="text-lg font-semibold mb-4">Categories</label>
        {categories?.map((item: Category, i) => (
          <div key={i}>
            <input
              className="w-6 h-6 accent-secondary-900 rounded-none mr-4"
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
        <label className="text-lg font-semibold mb-4">Sub Categories</label>
        {subCategoris?.map((item: { name: string; id: number }, i) => (
          <div key={i}>
            <input
              className="w-6 h-6 accent-secondary-900 rounded-none mr-4"
              type="checkbox"
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

            <label className="text-lg">{item.name}</label>
          </div>
        ))}
      </fieldset>

      <div className="mt-4">
        <div className="text-lg font-semibold mb-4">Colour</div>
        <div className="flex flex-wrap gap-4">
          <button className="w-10 h-10 border bg-primary focus:outline-none"></button>
          <button className="w-10 h-10 border bg-[#f3f33f] focus:outline-none"></button>
          <button className="w-10 h-10 border bg-[orange] focus:outline-none"></button>
          <button className="w-10 h-10 border bg-[green] focus:outline-none"></button>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-lg font-semibold mb-4">Size</div>
        <div className="flex gap-4">
          <div
            className={`w-10 h-10 border border-gray-300 flex items-center justify-center cursor-pointer ${
              sizeChecked ? "bg-blue-500 text-white" : ""
            }`}
            onClick={handleSizeCheckbox}
          >
            SM
          </div>
          <div
            className={`w-10 h-10 border border-gray-300 flex items-center justify-center cursor-pointer ${
              sizeChecked ? "bg-blue-500 text-white" : ""
            }`}
            onClick={handleSizeCheckbox}
          >
            M
          </div>
          <div
            className={`w-10 h-10 border border-gray-300 flex items-center justify-center cursor-pointer ${
              sizeChecked ? "bg-blue-500 text-white" : ""
            }`}
            onClick={handleSizeCheckbox}
          >
            L
          </div>
          <div
            className={`w-10 h-10 border border-gray-300 flex items-center justify-center cursor-pointer ${
              sizeChecked ? "bg-blue-500 text-white" : ""
            }`}
            onClick={handleSizeCheckbox}
          >
            XL
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-lg font-semibold mb-4">Price</div>

        <div className="gap-3 items-center">
          <div
            className={`flex items-center gap-1 cursor-pointer ${
              priceOptions.under500 ? "text-blue-500" : ""
            }`}
            onClick={() => handlePriceCheckbox("under500")}
          >
            <Image
              src={
                priceOptions.under500
                  ? "/assets/Checked.svg"
                  : "/assets/Checkbox.svg"
              }
              alt="checked"
              width={20}
              height={20}
            />{" "}
            <label>Under $500</label>
          </div>
          <div
            className={`flex items-center gap-1 cursor-pointer ${
              priceOptions.between500and1000 ? "text-blue-500" : ""
            }`}
            onClick={() => handlePriceCheckbox("between500and1000")}
          >
            <Image
              src={
                priceOptions.between500and1000
                  ? "/assets/Checked.svg"
                  : "/assets/Checkbox.svg"
              }
              alt="checked"
              width={20}
              height={20}
            />{" "}
            <label>$500 - $1000</label>
          </div>
          <div
            className={`flex items-center gap-1 cursor-pointer ${
              priceOptions.between1000and1500 ? "text-blue-500" : ""
            }`}
            onClick={() => handlePriceCheckbox("between1000and1500")}
          >
            <Image
              src={
                priceOptions.between1000and1500
                  ? "/assets/Checked.svg"
                  : "/assets/Checkbox.svg"
              }
              alt="checked"
              width={20}
              height={20}
            />
            <label>$1000 - $1500</label>
          </div>
        </div>
      </div>
      <div className="flex text-[12px] justify-between mt-4">
        <button className="p-3 border border-black">Clear Filter (n)</button>
        <button className="p-3 bg-[#020044] text-white">Show (n) Items</button>
      </div>
    </div>
  );
};

export default FilterProductMobile;
