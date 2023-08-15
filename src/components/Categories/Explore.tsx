
import Image  from "next/image"

export const Explore = () => {
  return (
    <div className=" py-7 my-16 justify-center items-center bg-[#F9F9FB]">
      <div className="px-9 flex flex-col-reverse sm:flex-row">
        <div className="flex justify-start items-center w-4/5 ">
            <div>
                <h1 className=" text-3xl sm:text-5xl uppercase"> Run Smart+</h1>
                <p className="mt-3 text-[#030822]">Phosfluor escently engage worldwide methodologies with web-enabled process-centric technology.</p>

                <button className="flex justify-center border-b text-[#030822] mt-3 border-black font-bold">Explore Now <img src="/assets/arrow-right.svg" alt="arrow-right" /></button>
            </div>
        </div>
        <div>
            <div className="flex justify-center items-center max-w-[17rem] sm:max-w-lg  ">
            <Image className="w-full" src="/assets/bag.png" width={336} height={448} alt="hero" />
            </div>
        </div>
      </div>
    </div>
  )
}
