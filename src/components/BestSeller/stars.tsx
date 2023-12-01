import React from "react";
import stars from "../../../public/assets/Star.png";
import halfstar from "../../../public/assets/Half star.png";
import Image from "next/image";
import Icon from "../shared/Icon";

const Stars = () => {
  return (
    <div>
      <div className="flex">
        <Icon name="Star" size={24} />
        <Icon name="Star" size={24} />
        <Icon name="Star" size={24} />
        <Icon name="Star" size={24} />
        <Icon name="Halfstar" size={24} />
      </div>
    </div>
  );
};

export default Stars;
