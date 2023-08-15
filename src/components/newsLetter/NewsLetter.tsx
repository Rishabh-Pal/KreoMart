import Image  from "next/image"
import styles from './NewsLetter.module.css'
import { AiOutlineMail, AiOutlineArrowRight } from 'react-icons/ai';


export const Newsletter = () => {
  return (
    
      <div className="my-16">
          <div className=" px-9 my-4 py-2 sm:py-4 flex flex-col-reverse sm:flex-row justify-between  items-center  bg-[#F9F9FB] w-full">
              <div className="sm:max-w-lg">
                <p className=" text-xl sm:text-3xl xl:text-5xl  capitalize text-[#030822] mb-7"> Join our newsletter  Enjoy big discounts</p>
               
                <form className="">

                  <div className="flex flex-row  mb-2  text-[#8991A4]  ">

                    <div className="flex justify-center items-center flex-grow">
                        <AiOutlineMail size={'1.5rem'}  />
                        <input type="email" className="bg-[#F9F9FB] outline-none ms-1 text-xs sm:text-base  text-lg flex-grow"   placeholder=" Your Email"/>
                    </div>

                    <div className="flex justify-center items-center">
                        <button className="flex flex-row text-[#8991A4] text-xs sm:min-w-[4rem] sm:text-base   hover:font-bold">
                        Sign Up 
                        </button>
                        <AiOutlineArrowRight size={'1.5rem'}  />
                    </div>

                  </div>
                  <div className="w-full mb-2  bg-slate-300 h-[1px]"></div>
                  
                  <div className="mb-4 flex items-center " >
                  <input className="h-5 w-4 " type="checkbox" name="" id="" />
                  <label className="text-xs ms-2 text-[#8991A4] ">I agree to receive marketing emails.</label>
                  </div>
                
                </form>

              </div>
              <div>
                <div className="flex justify-end align-middle max-w-[17rem] md:max-w-lg">
                  <Image className="w-full" src="/assets/bag.png" width={336} height={448} alt="hero" />
                </div>
              </div>
          </div>
      </div>
 

  )
}