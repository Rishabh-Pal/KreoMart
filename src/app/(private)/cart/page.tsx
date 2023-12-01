import Related_products from "@/components/BestSeller/Related_products";
import ProgressBar from "@/components/CartOption/ProgressBar";
import React from "react";
import { getServerSession } from "next-auth";
import { POST } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const CartPage = async () => {
  const session = await getServerSession(POST);
  if (!session) {
    redirect("/login");
    return null; 
  }

  return (
    <div className="bg-[#FAF9F8]">
      <ProgressBar />
      <Related_products />
    </div>
  );
};

export default CartPage;
