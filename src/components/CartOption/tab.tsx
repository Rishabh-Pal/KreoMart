import React from "react";
import "./tab.css"; 

interface TabProps {
  index: number;
  label: string;
  activeTab: string;
  onClick: (label: string) => void;
}

const Tab: React.FC<TabProps> = ({ index, label, activeTab, onClick }) => {
  const isActive = activeTab === label;
  // const applyCart = UseCartStore((state) => state.applyCart);
  return (
    <div
      className={`tab ${
        isActive ? "active" : ""
      }  font-medium md:text-[14px] text-[10px] justify-center`}
      onClick={() => onClick(label)}
    >
      <div className="flex gap-2 ">
        <div className=" justify-center ">
          <div className="w-8 flex items-center justify-center rounded-full bg-[#2222] ">
            {index}
          </div>
        </div>
        <div className="justify-center">{label}</div>
      </div>
    </div>
  );
};

export default Tab;
