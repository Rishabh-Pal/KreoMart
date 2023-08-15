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
    <div>
      <div className={styles.related_products} >
        <Image className={styles.product_img} src={imgrp} alt='product-related'/>
        <Image className={styles.unlike_icon} src={liked? LikedIcon: Icon} onClick={handleLikeClick} alt='Like'/>
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