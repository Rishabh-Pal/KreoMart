"use client";
import React, { useState } from "react";
interface StateInputProps {
  selectedState: string;
  onStateChange: (selectedState: string) => void;
}
const StateInput: React.FC<StateInputProps> = ({
  selectedState,
  onStateChange,
}) => {
  // Define an array of Indian states
  const indianStates: string[] = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];


  // Handle changes in the dropdown selection
  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onStateChange(event.target.value); // Call the onStateChange prop with the new selected state
  };

  return (
    <form>
      <select
        id="state"
        name="state"
        value={selectedState}
        onChange={handleStateChange}
        className="w-full px-4 py-3 mt-2 border text-[#C3C9D6] focus:border-blue-500 focus:bg-white focus:outline-none"
      >
        <option value="">Select a state</option>
        {indianStates.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </form>
  );
};

export default StateInput;
