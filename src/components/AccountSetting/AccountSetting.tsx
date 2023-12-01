import route from "@/routes";

import Link from "next/link";
import React from "react";
import Icon from "../shared/Icon";
import Profile_details from "./Profile_details";
import { signOut } from "next-auth/react";

const AccountSetting = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div className="  flex justify-center gap-8 p-20">
          <div className=" p-4 relative h-2/5 bg-white">
            <div className="  flex w-96 justify-between items-center text-base mb-5">
              <div>My Orders</div>
              <Link href={route.OrderHistory}>
                <Icon name="ArrowRight" size={24} />
              </Link>
            </div>
            <div className="  flex w-96 justify-between items-center text-base my-5">
              <div>Account settings</div>
              <Link href={route.Profile}>
                <Icon name="ArrowRight" size={24} />
              </Link>
            </div>
            <div className="flex w-96 justify-between items-center text-base my-5">
              <div>Contact us</div>
              <Link href={route.Contact}>
                <Icon name="ArrowRight" size={24} />
              </Link>
            </div>
            <div className="flex w-96 justify-between items-center text-base my-5">
              <button className=" text-gray-default">Log out</button>

              {/* <Link href={route.OrderHistory}>
                <Icon name="ArrowRight" size={24} />
              </Link> */}
            </div>
          </div>
          <div className="md:w-[500px] lg:w-[800px]">
            <Profile_details />
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex justify-center mx-0 text-base items-center gap-6 my-6 p-4">
          <Link className="underline cursor-pointer" href={route.OrderHistory}>
            My orders
          </Link>
          <Link className="underline cursor-pointer" href={route.Profile}>
            Account setting
          </Link>
          <Link className="underline cursor-pointer" href={route.Contact}>
            Contact us
          </Link>
          <Link className="underline cursor-pointer" href={route.OrderHistory}>
            Log out
          </Link>
        </div>
        <Profile_details />
      </div>
    </div>
  );
};

export default AccountSetting;
