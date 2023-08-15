import Image from 'next/image';
import React from 'react';

const EventImage = () => {
  return (
    <div>
            <div className="flex justify-center items-center sm:w-4/5">
                <img src='/assets/bag.png' className='flex !static !h-auto !w-4/5 sm:w-full' alt='hero'/>
            </div>
    </div>
  )
}

export default EventImage