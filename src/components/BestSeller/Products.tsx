"use client";
import React, {useState} from 'react'
import Image from 'next/image';
import imgrp from '../../../public/assets/Imgrp.png';
import Icon from '../../../public/assets/Favourite=False.png';
import LikedIcon from '../../../public/assets/Favourite-liked.png';
import styles from './Products.module.css';

const Products = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  
  return (
    <div className='w-[200px] text-[12px]'>
      <div className="relative">
        <Image className="object-cover w-full h-auto mr-0" src={imgrp} alt='product-related' />
        <Image className= "absolute bottom-5 right-5 cursor-pointer" src={liked? LikedIcon: Icon} onClick={handleLikeClick} alt='Like'/>
      </div>
      <div>
        <div>Zip-through hoodie</div> 
        <span>₹156.00</span>
        <span className='line-through font-medium text-gray-500 mr-2'>₹120.00</span>
      </div>
    </div>
  )
}

export default Products