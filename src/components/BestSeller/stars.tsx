import React from 'react'
import stars from '../../../public/assets/Star.png';
import halfstar from '../../../public/assets/Half star.png';
import Image from "next/image";

const Stars = () => {
  return (
    <div>
        
        <div className='flex'>
                <Image src={stars} alt="star" width={20} height={10}/>
                <Image src={stars} alt="star" width={20} height={10}/>
                <Image src={stars} alt="star" width={20} height={10}/>
                <Image src={stars} alt="star" width={20} height={10}/>
                <Image src={halfstar} alt="star" width={20} height={10}/>
        </div>
      
    </div>
  )
}

export default Stars;