'use client'
import React from 'react'
import { useEffect, useRef } from "react";
import Glide from '@glidejs/glide'
import Shopbutton from './Shopbutton';


const  GlideComponent=() =>{

    const sliderRef = useRef(null)
    
    useEffect(() => {
      if(!sliderRef.current){
        return ()=>{}
      }
        new Glide('.glide').mount();
      }, [sliderRef]);
    const images = [
        {
            id: 1,
            title: "Amazing discounts",
            image: "/assets/hero_img.png",
            description:
              "We started with humble beginnings — Your one-stop shop for trendy products and exclusive deals.",
          },
          {
            id: 2,
            title: "Amazing Offers",
            image: "/assets/sh1.PNG",
            description:
              "We started with humble beginnings — Your one-stop shop for trendy products and exclusive deals.",
          },
          {
            id: 3,
            title: "New Sales of Friday",
            image: "/assets/hero_img.png",
            description:
              "We started with humble beginnings — Your one-stop shop for trendy products and exclusive deals.",
          },
          {
            id: 4,
            title: "Thursday Market Offers",
            image: "/assets/hero_img.png",
            description:
              "We started with humble beginnings — Your one-stop shop for trendy products and exclusive deals.",
          },
          {
            id: 5,
            title: "KreoMart Magical Offers",
            image: "/assets/hero_img.png",
            description:
              "We started with humble beginnings — Your one-stop shop for trendy products and exclusive deals.",
          },
      ]
  return (
    <div>

       <div className="glide" ref={sliderRef}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides flex">
            {images.map((hero, index) => (
              <li className="glide_slide flex flex-col-reverse sm:flex-row justify-center items-center" key={index}>
              <div>
                <div>
                  <div className="text-5xl font-bold mb-3 ">{hero.title}</div>
                  <p>{hero.description}</p>
                </div>
  
                <Shopbutton />
              </div>
              <div className="">
                {/* <Image
                  className="w-full"
                  src={hero.image}
                  alt="hero"
                  width={436}
                  height={548}
                /> */}
              </div>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GlideComponent
