"use client"
import React, {useState} from 'react'
import Cart from '@/components/Mycart/Cart';
import Address from '@/components/Mycart/Address';
import Payment from '@/components/Mycart/Payment';
import Tab from '@/components/Mycart/tab';

const Product_detail = () => {
    const [activeTab, setActiveTab] = useState('Cart');

  const handleTabClick = (label: string) => {
    setActiveTab(label);
  };

  return (
    <div className="tabs-container my-[52px]">
      <div className="tabs flex flex-wrap sm:lg:gap-x-[150px]">
        <div className='flex-item'>
            <Tab label="Cart" activeTab={activeTab} onClick={handleTabClick}/>
        </div>
        <div>................</div>
        <div className='flex-item'>
            <Tab label="Address" activeTab={activeTab} onClick={handleTabClick} />
        </div>
        <div className='flex-item'>
            <Tab label="Payment" activeTab={activeTab} onClick={handleTabClick} /> 
        </div>
      </div>
      <div className="tab-contents">
        {activeTab === 'Cart' && <Cart/>}
        {activeTab === 'Address' && <Address/>}
        {activeTab === 'Payment' && <Payment/>}
      </div>
    </div>
  );
}

export default Product_detail;