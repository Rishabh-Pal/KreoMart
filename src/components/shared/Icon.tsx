import React from "react";

interface Props {
  name: string;
  size: number;
}

const Icon: React.FC<Props> = ({ name, size }) => {
  return (
    <svg width={size} height={size}>
      <use xlinkHref={`/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
