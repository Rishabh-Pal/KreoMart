import styles from './Feature.module.css';
import Image  from "next/image"

export const Feature = () => {
    return (
      <div className="my-16 flex flex-wrap  justify-between items-center  gap-y-8">

              <div className="flex   justify-center items-center flex-wrap basis-[49%] xl:basis-auto align-middle p-5 ">
                <div className='md:mr-3'><Image src="/assets/lock.svg" width={50} height={448} alt="" /></div>
                <div className='mt-3 sm:min-w-[11rem] text-center '><h1 className='text-[#030822] font-bold'>Secure Payment</h1>
                    <p className='text-[#8991A4]'>Secured by Stripe</p>
                </div>
              </div>

              <div className='w-[1px] h-10 bg-[#e5e7eb]'></div>

              <div className="flex   justify-center items-center flex-wrap basis-[49%] xl:basis-auto  align-middle p-5  ">
                <div className='md:mr-3'><Image src="/assets/money.svg" width={50} height={448} alt="" /></div>
                <div className='mt-3 sm:min-w-[11rem] text-center '>
                  <h1 className='text-[#030822] font-bold'>Money-Back</h1>
                      <p className='text-[#8991A4]'>30 day Guarantee</p>
                    </div>
              </div>

              <div className='w-[1px] hidden xl:block h-10 bg-[#e5e7eb]'></div>


              <div className="flex   justify-center items-center flex-wrap basis-[49%] xl:basis-auto align-middle p-5  ">
                <div className='md:mr-3'><Image src="/assets/headphones.svg" width={50} height={448} alt="" /></div>
                <div className='mt-3 sm:min-w-[11rem] text-center'><h1 className='text-[#030822] font-bold'>Premium Support</h1>
                      <p className='text-[#8991A4]'>Phone and email support</p></div>
              </div>

              <div className='w-[1px]  h-10 bg-[#e5e7eb]'></div>


              <div className="flex  justify-center items-center flex-wrap basis-1/2 xl:basis-auto align-middle p-5 ">
                <div className='md:mr-3' ><Image src="/assets/delivery.svg" width={50} height={448} alt="" /></div>
                <div className='mt-3 sm:min-w-[11rem] text-center'><h1 className='text-[#030822] font-bold '>Free Shipping</h1>
                    <p className='text-[#8991A4]'>Orders above $200</p></div>
              </div>
          
         
          
      </div>

    )
    }