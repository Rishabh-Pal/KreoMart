import React from "react";
import Icon from "../../shared/Icon";

const Shopbutton = () => {
  return (
    <div>
      <button className="mt-7 p-2 rounded-none border border-gray-default py-4 px-6 gap-[8px]  text-center flex  justify-center items-center hover:rounded-lg text-lg font-semibold text-gray-default">
        Shop Now
        <Icon name={"arrow-right"} size={24} />
      </button>
    </div>
  );
};

export default Shopbutton;
