"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./FeaturedProducts.module.css";
import BestSellers from "./BestSellers";
import NewArraivals from "./NewArraivals";
// function BestSellers() {
//   const [products, setProducts] = useState<Product>();
//   const fetch = async ()=>{
//     const response =await getApis.getProducts();
//     setProducts(response);
//   }
//   fetch()
//   return (
//     <>
//       <div className="md:hidden">
//         <label className="text-[#030822] py-2">BestSeller</label>
//         <Carousel
//           withIndicators
//           // height={200}
//           slideSize="33.333333%"
//           slideGap="md"
//           loop
//           align="start"
//           slidesToScroll={2}
//         >
//           {products?.results.map((ele) => {
//             console.log(ele);

//             return (
//               <Carousel.Slide key={ele.id}>
//                 <ProductCard product={ele} />
//               </Carousel.Slide>
//             );
//           })}
//         </Carousel>
//       </div>

//       <div className="hidden sm:block">
//         <h3 className="sm:hidden">Best Seller</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center  md:grid-cols-3 lg:grid-cols-4  gap-4">
//           {products?.results.map((product, index) => {
//             return <ProductCard key={index} product={product} />;
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// function NewArraivals() {
//   const [products, setProducts] = useState<Product>();
//   const fetch = async ()=>{
//     const response =await getApis.getProducts();
//     setProducts(response);
//   }
//   fetch()
//   return (
//     <>
//       <div className="md:hidden">
//         <label>NewArrivals</label>
//         <Carousel
//           withIndicators
//           // height={200}
//           slideSize="33.333333%"
//           slideGap="md"
//           loop
//           align="start"
//           slidesToScroll={2}
//         >
//           {products?.results.map((ele) => {
//             console.log(ele);

//             return (
//               <Carousel.Slide key={ele.id}>
//                 <ProductCard product={ele} />
//               </Carousel.Slide>
//             );
//           })}
//         </Carousel>
//       </div>
//       <div className="hidden sm:block">
//         <h3 className="sm:hidden">New Arrivals</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center  md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {products?.results.map((product, index) => {
//             return <ProductCard key={index} product={product} />;
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

export const FeaturedProducts = () => {
  const [bestSeller, bestSellerView] = useState(true);
  const [newArrvals, newArrvalsView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // const [sliderInstance, setSliderInstance] = useState(null);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   // Add event listener for resize
  //   window.addEventListener("resize", handleResize);

  //   // Call handleResize initially
  //   handleResize();

  //   // Clean up event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (isMobile && sliderInstance === null) {
  //     setSliderInstance(new KeenSlider(".keen-slider")); // Initialize Keen Slider
  //   }
  // }, [isMobile, sliderInstance]);

  return (
    <div className="my-16">
      <div className=" mb-4 ">
        <h1 className="sm:text-xl  hidden sm:block   text-center mb-8 text-[#030822]">
          <span
            className={`${styles.sec_nav} ${
              bestSeller && styles.active
            } hover:font-normal`}
            onClick={() => {
              bestSellerView(true);
              newArrvalsView(false);
            }}
          >
            Best Sellers
          </span>
          <br className="sm:hidden " />
          <span
            className={`${styles.sec_nav} ${
              newArrvals && styles.active
            } hover:font-normal inline-block !mt-4 sm:!mt-0`}
            onClick={() => {
              bestSellerView(false);
              newArrvalsView(true);
            }}
          >
            New Arrivals
          </span>
        </h1>
      </div>

      <div className="hidden sm:block">
        <div>{bestSeller || isMobile ? <BestSellers /> : null}</div>
        <div>{newArrvals || isMobile ? <NewArraivals /> : null}</div>
      </div>
      <div className="sm:hidden">
        <BestSellers />
        <NewArraivals />
      </div>

     
    </div>
  );
};

function LoadMore() {
  return (
    <div className="flex justify-center my-5 py-6">
      <button className="justify-center items-center text-center text-sm  py-4 px-6 border-2 box-border border-solid border-gray-default font-medium  ">
        Load More
      </button>
    </div>
  );
}
