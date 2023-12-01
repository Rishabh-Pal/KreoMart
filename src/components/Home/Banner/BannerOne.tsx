import Image from "next/image";
import Icon from "../../shared/Icon";

export const BannerOne = () => {
  return (
    <div className="   justify-center items-center bg-white p-[34px] sm:p-[52px] box-border text-gray-default text-base sm:text-3xl font-medium gap-4">
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="flex justify-start items-center md:w-4/5 text-gray-default   ">
          <div className=" mt-8 md:w-[400px]  ">
            <div className=" text-4xl sm:text-5xl uppercase font-normal md:font-normal  ">
              Run Smart+
            </div>
            <div className="mt-4 mb-14 text-lg font-medium ">
              Phosfluor escently engage worldwide methodologies with web-enabled
              process-centric technology.
            </div>

            <button className="flex justify-center border-b item-center  border-black font-bold overflow-hidden flex-row items-center  gap-2 text-center text-xl  border-solid ">
              <div className=" relative leading-[130%] font-medium">
                Explore Now
              </div>
              <div className="">
                <Icon name={"arrow-right"} size={24} />
              </div>
            </button>
          </div>
        </div>
        <div className="mx-auto">
          <div className="flex md:justify-center items-center max-w-[24.5rem] sm:max-w-lg relative  object-cover ">
            <Image
              className="w-full"
              src="/assets/massage_gun.jpg"
              width={336}
              height={448}
              alt="hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
