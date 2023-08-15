import React from 'react'
import InstaImage from './InstaImage'

const Insta = () => {
  return (
    <div className='my-12 mt-7 justify-between items-center text-center bg-[#F9F9FB] w-full'>

      <div className=' flex-col flex-wrap justify-between align-center  '>
        <a className='text-[#030822]' href='#'>@itskreomart</a>
        <p className='text-[#030822] text-center text-4xl '>On Instagram </p>
        <p className='text-[#030822]'>Discover amazing product offers on our Instagram page and elevate your shopping experience</p>
      </div>

      <div className='flex gap-2 p-4'>
        <InstaImage/>
        <InstaImage/>
        <InstaImage/>
        <InstaImage/>
      </div>
      
    </div>
  )
}

export default Insta
