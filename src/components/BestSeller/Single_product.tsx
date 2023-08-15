'use client'

import React, { useState } from 'react';
import Stars from '@/components/BestSeller/stars';

const Single_product = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  const handleColorButtonClick = (color:string) => {
    setSelectedColor(color);
  };
  // const handleSmallPreviewClick = (image)=>{
  //   setSelectedImage(image);
  // }
  const getImageSource = () => {
    return selectedColor ? `/assets/${selectedColor}.png` : '/assets/image 40.png';
  };



  function handleAddToCart(): void {
    console.log('clicked');
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 md:p-0 my-[52px]'>

      <div className='ml-2 mt-10 flex'>
        <div className='flex flex-col w-full md:w-[11.725rem] h-[12rem] p-2'>
          <img className='w-1/4 md:w-full' src='/assets/image 40.png' alt='shoes' onClick={() => handleColorButtonClick('image 40')} />
          <img className='w-1/4 md:w-full' src='/assets/image 22.png' alt='shoes' onClick={() => handleColorButtonClick('image 22')}/>
          <img className='w-1/4 md:w-full' src='/assets/image 25.png' alt='shoes' onClick={() => handleColorButtonClick('image 25')} />
          <img className='w-1/4 md:w-full' src='/assets/image 24.png' alt='shoes' onClick={() => handleColorButtonClick('image 24')}/> 
          <img className='w-1/4 md:w-full' src='/assets/image 23.png' alt='shoes' onClick={() => handleColorButtonClick('image 23')}/> 
          <img className='w-1/4 md:w-full' src='/assets/image 37.png' alt='shoes' onClick={() => handleColorButtonClick('image 37')}/> 
        </div> 
        

        <div className=' p-3'>
          <img className='w-12px h-auto rounded-3xl' src={getImageSource()} alt='shoe' />
        </div>
        
      </div>
      <div className='p-3 '>
        <div className='px-4  '>
          <div className='p-4  '>
            <h1 className='text-4xl text-[#030822] font-bold'>NIKE ROSHE RUN</h1>
            <p className='text-gray-400'>Footware</p>
            {/* <p className='text-sm text-[#030822] font-bold mb-4 '>Description:</p> */}
            <p>
              Nike Air technology consists of pressurized air inside a tough yet flexible bag, and provides more
              flexibility and spring without compromising structure. The Air-Sole units maintain their given form with
              elasticity, reduce impact and keep the shoe snug and lightweight.
            </p>
            <div className='flex gap-x-[8px]'>
            <Stars/>
            <span className='text-[14px] underline underline-offset-4 underline-gray-500'>16 Review</span>
            </div>
            <p className='border-b-2'>
              <span className='text-[32px] font-bold pr-2 '>₹2000.00</span>
              <span className='line-through text-[16px] font-medium text-gray-500 '>₹2999.00</span>
            </p>
          </div>
        </div>
        <div className='px-7'>
          <div className='md:justify-between md:gap-x-8   mt-2 items-center pb-5 border-b-2 border-gray-100 mb-6'>
         
              <div className='mb-[24px]'>
                <div className="mr-3 mb-[12px] text-[14px] font-medium">Colour</div>
                <button className="border-2 border-gray-300 w-[32px] h-[32px] focus:outline-none" onClick={() => handleColorButtonClick('pink')}></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 w-[32px] h-[32px] focus:outline-none" onClick={() => handleColorButtonClick('gray')}></button>
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 w-[32px] h-[32px] focus:outline-none" onClick={() => handleColorButtonClick('indigo')}></button>
              </div>    

              <div className="items-center">
               <span className="mr-3 mb-[12px] text-[14px] font-medium">Size</span>
                 <div className="relative">
                    <div className="flex gap-x-[12px]">
                      <div className='box-border h-[34px] w-[40px] border-[1px]  text-center '>SM</div>
                      <div className='box-border h-[34px] w-[40px] border-[1px] text-center'>M</div>
                      <div className='box-border h-[34px] w-[40px] border-[1px] text-center'>L</div>
                      <div className='box-border h-[34px] w-[40px] border-[1px] text-center'>XL</div>
                     </div>
                    {/* <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                         <path d="M6 9l6 6 6-6"></path>
                       </svg>
                    </span> */}
                  </div>
              </div>

              {/* <div className="flex ml-6 items-center">
                <span className="mr-3">QTY</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                </span>
              </div>
            </div> */}
          </div>
        </div>

        <div className='mt-4 px-6 flex gap-5'>
          <button className='flex flex-wrap text-center border-0 py-2 px-6 m-3 focus:outline-none border-2 border-black '>
            <div className='mx-2'>
            <img src='/assets/Favourite.png' alt='favourite' width={20}/>
            </div>
            <div>Add to Wishlist</div>
            </button>
          <button className="flex flex-wrap text-center text-white bg-indigo-500 border-0 py-2 px-6 m-3 focus:outline-none hover:bg-indigo-600 " onClick={() => handleAddToCart()}>
          <div className='mx-2'>
          <img src='/assets/BagCart.png' alt='favourite' width={20}/>
          </div>
          <div>Add To Bag</div>
            </button>
        </div>
      </div>









      
    </div>
  );
};

export default Single_product;
