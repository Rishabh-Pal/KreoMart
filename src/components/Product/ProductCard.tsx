'use client'
import React, {useState} from 'react';
import styles from './ProductCard.module.css';
import Image from 'next/image';

import imgrp from '../../../public/assets/Imgrp.png';
import Icon from '../../../public/assets/Favourite=False.png';
import LikedIcon from '../../../public/assets/Favourite-liked.png';

interface ProductCardProps {
  product: {
    name: string;
    price: number;
    assets: { preview_image: string }[];
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  console.log(product)
  return (
    <div >
      {/* <div className='relative w-[100px] h-[100px]'>
        {product.assets && product.assets.length > 0 && (
          <Image src={product.assets[0].preview} alt='Product Image' fill className={styles.product_image} />
        )}
      </div>
      <div className='relative w-[100px] h-[100px]'>
      <Image src={product.preview_image} alt='Product Image' fill className={styles.product_image} />
      </div>

      <p className='text-[#030822] items-start w-full h-auto'>{product.name}</p>
      <p>
         <span className='text-[#3d414b]'>₹{product.price}</span>
      </p> */}


      <div className={styles.related_products} >
        {product.assets && product.assets.length > 0 && (
          <Image src={product.assets[0].preview_image} alt='Product Image' fill className={styles.product_img} />
        )}
        {/* <Image className={styles.product_img} src={imgrp} alt='product-related'/> */}
        <Image className={styles.unlike_icon} src={liked? LikedIcon: Icon} onClick={handleLikeClick} alt='Like'/>
      </div>
      <div>
        <div>{product.name}</div> 
        <span>₹{product.price}</span>
        <span className='line-through font-medium text-gray-500 mr-2'>₹120.00</span>
      </div>
    </div>
  );
};

export default ProductCard;
