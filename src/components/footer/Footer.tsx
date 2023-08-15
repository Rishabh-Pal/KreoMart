import React from 'react'
import styles from'./Footer.module.css';

function footer() {
  return (
    <div className={styles.footer} >
  
      <div className={styles.footer_container} >
          <div className={styles.desc}> 
            <div className='flex-1 leading-loose'>
            <img  className= 'w-32 h-7 sm:h-8 sm:w-36 ' src="logo.svg" alt="Kreomart" />
            <h1 className='mt-2  sm:text-base text-[#54586C]'>A right place to buy a new products</h1> 
            </div>
             <div className={styles.social_media}>      {/*' flex  flex-row gap-2 w-80 ' */} 
            <img src="/assets/facebook.svg" alt="" />
            <img src="/assets/instagram.svg" alt="" />
            <img src="/assets/twitter.svg" alt="" />
            <img src="/assets/linkedln.svg" alt="" />
            <img src="/assets/whatsapp.svg" alt="" />
            </div>
          </div>
          <div className='shop leading-loose gap-0.75rem'>
            <h1 className=' text-[#020044] '>Shop</h1>
            <p className='text-[#54586C]'>My Account</p>
            <p className='text-[#54586C]'>Login</p>
            <p className='text-[#54586C]'>Wishlist</p>
            <p className='text-[#54586C]'>Cart</p>
          </div>
          <div className='info leading-loose gap-0.75rem'>
          <h1 className=' text-[#020044] '>Information</h1>
            <p className='text-[#54586C]'>Shipping Policy</p>
            <p className='text-[#54586C]'>Returns & Refunds</p>
            <p className='text-[#54586C]'>Cookies Policy</p>
            <p className='text-[#54586C]'>Frequently Asked Question</p>
          </div>
          <div className='company leading-loose gap-0.75rem'>
          <h1 className='text-[#020044] '>Company</h1>
            <p className='text-[#54586C]'>About us</p>
            <p className='text-[#54586C]'>Privacy Policy</p>
            <p className='text-[#54586C]'>Terms & Conditions</p>
            <p className='text-[#54586C]'>Contact us</p>
          </div>
      </div>
  
   
    <div className='copyright hidden md:flex flex justify-between  border-box border-t-2 pt-2'>
      <div className='  text-[#54586C]'>Kreomart 2023</div>
      <div className=' mx-2 text-[#54586C]'>Kreomart © Copyright 2023, Inc. All rights reserved</div>
    </div>
    <div className='border-box border-t-2 md:hidden text-[#54586C] mx-2 text-xs font-normal pt-2'>Kreomart 2023 <span className='border-r-2'></span> © Copyright 2023, Inc. All rights reserved</div>
    </div>   
  );
};

export default footer
