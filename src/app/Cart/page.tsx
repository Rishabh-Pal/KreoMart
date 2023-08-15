import AlsoLike from "@/components/CartOption/AlsoLike";
import ProgressBar from "@/components/CartOption/ProgressBar";
import Instapage from "@/components/Insta/Instapage";
import React from "react";

const CartPage = () => {
  return (
    <div>
      <ProgressBar />
      <AlsoLike />
      <Instapage />
    </div>
  );
};

export default CartPage;
