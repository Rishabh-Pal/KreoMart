import React from "react";
import { ProductDetail } from "../../../typings";

type Props = {
  data: ProductDetail | undefined;
};

const Description = () => {
  return (
    <div className="my-[40px] text-base">
      {/* <div>{data}</div> */}
      <div className="pb-5 ">
        Long-sleeved top in soft cotton jersey with a round, trimmed neckline
        and straight-cut hem.
      </div>
      <div className="text-gray-500 ">Product code</div>
      <div className="">SS23LQD9827_BLUE</div>
      <div className="text-gray-500 pt-5 ">Care Instructions</div>
      <div className="">Machine wash</div>
      <div className="text-gray-500 pt-5 ">Manufacturer Details</div>
      <p className="">
        Manufacturer and Packer detailsIkon Retail Pvt.Ltd F-90/2 phase-1 Okhla
        110020Importer detailsIkon Retail Pvt.Ltd F-90/2 phase-1 Okhla 110020
      </p>
      <div className="text-gray-500 pt-5 ">
        DISCLAIMER: Colors of the product might appear slightly different on
        digital devices.
      </div>
    </div>
  );
};

export default Description;
