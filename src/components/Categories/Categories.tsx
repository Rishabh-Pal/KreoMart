import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState } from 'react';
import styles from './categories.module.css';
import Image  from 'next/image';
import CategoryCard from './CategoryCard';
import 'keen-slider/keen-slider.min.css'
import { ProductsType } from '../../../typings';


const products:ProductsType[]=[
  {
    id: 1,
    name: "string",
    description: "string",
    price: "string",
    brand: "string",
    image: "string",
    category: "string",
    quantity: 2,
  },
]
  
  
  
export const Categories = () => {
  
    const [sliderRef, instanceRef] = useKeenSlider(
      {
        slides: {
          perView: 4,
          spacing: 15,
        },
      },
      [
        // add plugins here
      ]
    )
  
  
    const [products, setProducts] = useState<ProductsType[]>([]);
  
    useEffect(()=>{
      fetch("http://127.0.0.1:8000/api/products/")
      .then((res:any) => res.json())
      .then((data:ProductsType[]) => {
        console.log(data);
        
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
      
    },[])
  
    return (
      <>
  
      <div className='flex mb-4'>
        <h1 className='text-xl font-bold text-[#030822]'>Categories</h1>
      </div>
      <div ref={sliderRef} className='keen-slider'>
      {products.map((ele) => {
        console.log(ele);
      
        return <CategoryCard products={products} key={ele.id}  />;
      })}
      </div>
      </>
    )
  }