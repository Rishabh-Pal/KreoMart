"use client"
import React, {useState} from 'react'
import Description from '@/components/BestSeller/Description'
import Additionalinfo from '@/components/BestSeller/Additionalinfo'
import Review from '@/components/BestSeller/Review'
import Tab from './tab';

const Product_detail = () => {
    const [activeTab, setActiveTab] = useState('Description');

  const handleTabClick = (label: string) => {
    setActiveTab(label);
  };

  return (
    <div className="tabs-container my-[52px]">
      <div className="tabs flex flex-wrap sm:lg:gap-x-[150px]">
        <div className='flex-item'>
            <Tab label="Description" activeTab={activeTab} onClick={handleTabClick}/>
        </div>
        <div className='flex-item'>
            <Tab label="Additional Info" activeTab={activeTab} onClick={handleTabClick} />
        </div>
        <div className='flex-item'>
            <Tab label="Review" activeTab={activeTab} onClick={handleTabClick} /> 
        </div>
      </div>
      <div className="tab-contents">
        {activeTab === 'Description' && <Description/>}
        {activeTab === 'Additional Info' && <Additionalinfo/>}
        {activeTab === 'Review' && <Review/>}
      </div>
    </div>
  );
}

export default Product_detail;