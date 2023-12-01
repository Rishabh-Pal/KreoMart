"use client";
import Icon from "@/components/shared/Icon";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {  useCallback, useState } from "react";


interface ResultData {
  id: number;
  name: string;
}[];

interface Props {
  setResults: (results: ResultData[]) => void;
}

const SearchBar: React.FC<Props> = ({ setResults }) => {

  const router =useRouter() 
  const pathName = usePathname();
  const searchParams = useSearchParams()
  const [input, setInput] = useState("");

 
  
  console.log(input, "input" )
  const handleSearch = () => {
    //  navigate to products page with search query
    router.replace(`/products?search=${input}`  )
  }

  const data = [
    {
      id: 1,
      name: "tshirt",
    },
    {
      id: 2,
      name: "Sandals",
    },
    {
      id: 3,
      name: "pants",
    },
    {
      id: 4,
      name: "tshirt",
    },
    {
      id: 5,
      name: "tshirt",
    },
    {
      id: 6,
      name: "tshirt",
    },
    {
      id: 7,
      name: "tshirt",
    },
    {
      id: 8,
      name: "tshirt",
    },
    {
      id: 9,
      name: "tshirt",
    },
    {
      id: 10,
      name: "tshirt",
    },
    {
      id: 11,
      name: "tshirt",
    },
    {
      id: 12,
      name: "tshirt",
    },
    {
      id: 13,
      name: "tshirt",
    },
  ];

  const getdata = (value: string) => {
    const results = data.filter((user: { name: string }) => {
      return (
        value && user && user.name && user.name.toLowerCase().includes(value)
      );
    });
    setResults(results);
  };

  const handleChange = (value: string) => {
    setInput(value);
    getdata(value);
    console.log(value, "value")
  };

  return (
    <div className="   md:w-full h-16   flex items-center mr-2">
      <span 
        onClick={handleSearch}
      >
      <Icon name={"search"} size={24}  />
      </span>
      <input
        placeholder="What are you Looking for"
        type="search"
        value={input}
        className="w-full h-full bg-transparent sm:bg-background  ml-2 focus:outline-none text-xl px-4"
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
          // onenter call handle search

            handleChange(e.target.value);
        
        }}
        onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>) => {
          console.log(e.key, "e.key")
          if(e.key === "Enter"){
            handleSearch()
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
