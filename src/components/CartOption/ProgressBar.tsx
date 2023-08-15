// import {State=Cart} from './assets/State=Cart.png'

"use client";
import React, { useState } from "react";

import Tab from "./tab";
import Payment from "./Payment";
import Address from "./Address";
import Cart from "./Cart";

const ProgressBar = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const handleTabClick = (label: string) => {
    setActiveTab(label);
  };

  return (
    <div className="tabs-container my-[52px] ">
      <div className="tabs flex flex-wrap sm:lg:gap-x-[150px] justify-center">
        <div className="flex-item">
          <Tab label="Cart" activeTab={activeTab} onClick={handleTabClick} />
        </div>
        <div className="flex-item">
          <Tab label="Address" activeTab={activeTab} onClick={handleTabClick} />
        </div>
        <div className="flex-item">
          <Tab label="Payment" activeTab={activeTab} onClick={handleTabClick} />
        </div>
      </div>
      <div className="tab-contents">
        {activeTab === "Cart" && <Cart />}
        {activeTab === "Address" && <Address />}
        {activeTab === "Payment" && <Payment />}
      </div>
    </div>
  );
};

export default ProgressBar;
