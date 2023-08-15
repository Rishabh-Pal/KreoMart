'use client';
import Image  from "next/image"

import { useState, useEffect } from 'react';
import styles from './Seller.module.css';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import KeenSlider from 'keen-slider'; 

// import { FiHeart } from 'react-icons/fi';   // only fill colors in border

import { IoIosHeart } from 'react-icons/io';  // fills color in heart 


interface ProductData {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    // favourite: string;
  }



const Product = (data:ProductData) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };


  return (
    <div  className={styles.product_card}>
      <div className={styles.product_image_container}>
        <img src={data.image} alt="Product Image" className={styles.product_image} />
        {/* <a href="#" className={styles.wishlist_icon}><FiHeart /></a> */}
        <button
          className={`${styles.wishlist_icon} ${isFavorite ? styles.favorite : ''}`}
          onClick={handleFavorite}
        >
          {isFavorite ? <IoIosHeart color="red" /> : <IoIosHeart />}
        </button>
      </div>
      {/* <div className={styles.fav_image}><img src={data.favourite} alt="WishList"  /></div> */}
      
      <h2 className={styles.product_title}>{data.name}</h2>
      <p className={styles.product_description}>{data.description}</p>
      <p className={styles.product_price}>{data.price}</p>
    </div>
  );
};

function BestSellers() {
  const productsData = [
    {
      id: 1,
      name: "Product 1",
      description: "Leather Laptop Bag for Men",
      price: 156.00,
      image: "/assets/bag.png",
      category: "Category 1",
      favourite: "/assets/Favourite.png"
    },
    {
      id: 2,
      name: "Product  2",
      description: "Leather Laptop Bag for Men.",
      price: 156.00,
      image: "/assets/bag.png",
      category: "Category 2",
      favourite: "/assets/Favourite.png"
    },
    {
      id: 3,
      name: "Product  3",
      description: "Leather Laptop Bag for Men",
      price: 156.00,
      image: "/assets/bag.png",
      category: "Category 1",
      favourite: "/assets/Favourite.png"
    },
    {
      id: 4,
      name: "Product  4",
      description: "Leather Laptop Bag for Men",
      price: 156.00,
      image: "/assets/bag.png",
      category: "Category 2",
      favourite: "/assets/Favourite.png"
    },
    {
      id: 5,
      name: "Product  5",
      description: "Leather Laptop Bag for Men",
      price: 14.99,
      image: "/assets/bag.png",
      category: "Category 1",
      favourite: "/assets/Favourite.png"
    },
    {
      id: 6,
      name: "Product  6",
      description: "Leather Laptop Bag for Men",
      price: 156.00,
      image: "/assets/bag.png",
      category: "Category 2",
    },
    {
      id: 7,
      name: "Product  7",
      description: "Leather Laptop Bag for Men",
      price: 156.00,
      image: "/assets/bag.png",
      category: "Category 2",
      favourite: "/assets/Favourite.png"
    },
    
  ];
  const [products, setProducts] = useState(productsData);

  return (
    <>
      <h3 className="sm:hidden">Best Seller</h3>
      <div className={styles.product_card_container}>
        {products.map((product,i) => {
          return  <Product {...product} key={i}  />;
        })}
      </div>
    </>
  );
}


function NewArraivals() {

  const productsData = [
    {
      id: 1,
      name: "Product 1",
      description: "This is the description for Product 1.",
      price: 19.99,
      image: "/assets/bag.png",
      category: "Category 1",
      favourite: "/assets/Favourite.png"
    },
    {
      id: 2,
      name: "Product NA 2",
      description: "This is the description for Product NA 2.",
      price: 29.99,
      image: "/assets/bag.png",
      category: "Category 2",
      favourite: "/assets/Favourite.png"
    },
  
    {
      id: 4,
      name: "Product NA 4",
      description: "This is the description for Product NA 4.",
      price: 39.99,
      image: "/assets/bag.png",
      category: "Category 2",
      favourite: "/assets/Favourite.png"
    },
    {
      id: 5,
      name: "Product NA 5",
      description: "This is the description for Product NA 5.",
      price: 14.99,
      image: "/assets/bag.png",
      category: "Category 1",
      favourite: "/assets/Favourite.png"
    },
    {
      id: 6,
      name: "Product NA 6",
      description: "This is the description for Product NA 6.",
      price: 49.99,
      image: "/assets/bag.png",
      category: "Category 2",
      favourite: "/assets/Favourite.png"
    },
    {
      id: 7,
      name: "Product NA 7",
      description: "This is the description for Product NA 7.",
      price: 49.99,
      image: "/assets/bag.png",
      category: "Category 2",
      favourite: "/assets/Favourite.png"
    },
    {
      id: 8,
      name: "Product NA 8",
      description: "This is the description for Product NA 8.",
      price: 49.99,
      image: "/assets/bag.png",
      category: "Category 2",
      favourite: "/assets/Favourite.png"
    }
  ];
  const [products, setProducts] = useState(productsData);

  return (
    <>

      <h3 className="sm:hidden">New Arrivals</h3>
      <div className={styles.product_card_container}>
        {products.map((product,i) => {

          return <Product {...product} key={i} />;
        })}
      </div>
    </>
  );
}

  
export const Sellers = () => {
  const [bestSeller, bestSellerView]=  useState(true)
  const [newArrvals, newArrvalsView]=  useState(false)
  const[isMobile, setIsMobile] = useState(false)
  const [sliderInstance, setSliderInstance] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile && sliderInstance === null) {
      setSliderInstance(new KeenSlider('.keen-slider')); // Initialize Keen Slider
    }
  }, [isMobile, sliderInstance]);

  
  return (
    <div className='my-16'>

      <div className=' mb-4 '>
        <h1 className='sm:text-xl  hidden sm:block  font-bold text-center mb-8 text-[#030822]'>
          
          <span className={`${styles.sec_nav} ${bestSeller && styles.active} hover:font-black`} 
          onClick={ ()=>{
            bestSellerView(true)
            newArrvalsView(false)
          } } >Best Sellers</span>
          <br className="sm:hidden " />
          <span className={`${styles.sec_nav} ${newArrvals && styles.active} hover:font-black inline-block !mt-4 sm:!mt-0`}   
            onClick={()=>{
            bestSellerView(false)
            newArrvalsView(true)
          }}>
            New Arrivals</span>
            
            </h1>

      </div>

      
      <div>

      <div>{bestSeller || isMobile ? <BestSellers  /> : null}</div>
      <div>{newArrvals || isMobile ? <NewArraivals /> : null}</div>
      </div>

     

      
      <LoadMore/>
       
    </div>
  )
}

function LoadMore() {
  return (
    <div className='flex justify-center my-5'>
      <button className='bg-light text-dark border-2 font-medium px-4 py-2 '>Load More</button>
    </div>
  )
}