import Icon from "@/components/shared/Icon";
import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export const Newsletter = () => {
  return (
    <div className="bg-white flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-8 lg:px-12 mb-[80px]">
      <div className="md:w-full mx-[10px] ">
        <div className="mb-6 md:mb-20 font-semibold">
          <p className="text-xl md:text-3xl lg:text-4xl mb-2 text-gray-default">
            Join our newsletter.
          </p>
          <p className="text-xl md:text-3xl lg:text-4xl text-gray-default">
            Enjoy big discounts.
          </p>
        </div>
        <div className="flex  gap-8 ">
          <div className="flex border md:border-gray-500 w-full md:w-1/2 items-center">
            <span className="sm:px-4 ">
              <Icon size={20} name="gmail" />
            </span>
            <input
              type="email"
              placeholder="  Your email"
              className="  outline-none  text-sm md:text-base font-medium h-10 md:h-12 w-full "
            />
          </div>
          <div className="flex justify-center items-center  p-2 border md:border-gray-500">
            <button className="text-[#030822] text-sm w-[60px] md:text-base px-2">
              Sign Up
            </button>
            <Icon size={24} name="arrow-right" />
          </div>
        </div>
        <div className="border-b-2 border-[#8991a4] md:border-none"></div>
        <div className="my-2 md:my-4 flex items-center ">
          <input
            className="w-4 h-4 md:w-5 md:h-5 accent-secondary "
            type="checkbox"
            name=""
            id=""
          />
          <label className="text-sm  ms-2 text-gray-600 ">
            I agree to receive marketing emails.
          </label>
        </div>
      </div>
      <div className="flex justify-center items-center md:w-1/2">
        <Image
          className="w-[300px]"
          src="/assets/bag.png"
          width={336}
          height={448}
          alt="hero"
        />
      </div>
    </div>
  );
};
