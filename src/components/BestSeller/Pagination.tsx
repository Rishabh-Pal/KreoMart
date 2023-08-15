import React from 'react'
import leftarrow from '../../../public/assets/arrow-left.png'
import rightarrow from '../../../public/assets/arrow-right.png'

import selected from '../../../public/assets/Selected=True.png'
import shape from '../../../public/assets/Shape.png'
import Image from 'next/image'


const Pagination = () => {
  return (
    <div className='flex gap-x-[16px]'>
      <Image src={leftarrow} alt='left-arrow' width={20}/>
      <Image src={selected} alt='left-arrow' width={20}/>
      <Image className='m-2' src={shape} alt='left-arrow' />
      <Image className='m-2' src={shape} alt='left-arrow'/>
      <Image src={rightarrow} alt='left-arrow'width={20}/>
    </div>
  )
}

export default Pagination;