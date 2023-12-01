import { Carousel } from "@mantine/carousel";
import { useState } from "react";

import { allProducts } from "@/lib/data/products";
import { ProductCard } from "@/components/Products";

const BestSellers = () => {
  const [products, setProducts] = useState(allProducts);

  return (
    <>
      <div className="md:hidden">
        <label className="block text-[#030822] py-2 text-xl  my-4">
          BestSeller
        </label>
        <Carousel
          withIndicators
          // height={200}
          slideSize="50%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={1}
        >
          {products?.results.map((ele) => {
            // console.log(ele);

            return (
              <Carousel.Slide key={ele.id}>
                <ProductCard product={ele} />
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>

      <div className="hidden sm:block">
        <h3 className="sm:hidden  font-bold my-4">Best Seller</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-start  md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products?.results.map((product, index) => (
            <div  key={index} className="mt-0">
              <ProductCard product={product} />

            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BestSellers;
