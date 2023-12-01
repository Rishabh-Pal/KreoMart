// "use client";

// import React, { useEffect, useState } from "react";
// import check from "../../../public/assets/Check.svg";
// import checked from "../../../public/assets/Checkbox.svg";
import Image from "next/image";
import Checkout from "./Checkout";
// import StateInput from "./StateInput";
// import "./Address.Module.css";
// // import { UseCartStore } from "@/store/store";
// import { CartDetail } from "../../../typings";

// interface FormData {
//   addressLine1: string;
//   addressLine2: string;
//   selectedState: string;
//   cityTown: string;
//   pincode: string;
//   isDefaultAddress: boolean;
//   isAddressSaved: boolean;
// }

const Address= () => {
//   const [clickbox, setClickbox] = useState(false);
//   const [savedAddresses, setSavedAddresses] = useState<FormData[]>([]);
//   const [showsavedAddress, setShowsavedAddress] = useState(false);
//   const [newaddress, setNewAddress] = useState(false);
//   const [showAddress, setShowAddress] = useState(false);
//   const [selectedSavedAddress, setSelectedSavedAddress] =
//     useState<FormData | null>(null);
//     // const getAllCart = UseCartStore((state) => state.getAllCart);
//   // const cart = UseCartStore((state)=>state.cart);
//   const [cartData, setCartData] = useState<CartDetail | undefined>(cart);
 
//     useEffect(() => {
//     const fetchData = async () => {
//       // const data = await getAllCart();
//       setCartData(data);
//     };

//     fetchData();
//   }, [getAllCart]);

//   const handlecheckbox = () => {
//     return setClickbox(!clickbox);
//   };
//   const initialState: FormData = {
//     addressLine1: "",
//     addressLine2: "",
//     selectedState: "",
//     cityTown: "",
//     pincode: "",
//     isDefaultAddress: false,
//     isAddressSaved: false,
//   };

//   const [formData, setFormData] = useState<FormData>(initialState);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     const newValue = type === "checkbox" ? checked : value;
//     setFormData({ ...formData, [name]: newValue });
//   };

//   const handleStateChange = (selectedOption: string) => {
//     setFormData({ ...formData, selectedState: selectedOption });
//   };

//   const handleSaveAddress = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     if (clickbox) {
//       setSavedAddresses([...savedAddresses, formData]);
//       setFormData({ ...initialState, isAddressSaved: true });
//     }
//     setSavedAddresses([...savedAddresses, formData])
//     setFormData({ ...initialState, isAddressSaved: true });
//     const isFormDataEmpty = Object.keys(formData).every(
//       (key) => formData[key as keyof FormData] === ""
//     );
//     if (!isFormDataEmpty ) {
//       setShowsavedAddress(!showsavedAddress);
//     }
//     // console.log(formData);
//   };

//   const handleaddress = () => {
//     setShowAddress(!showAddress);
//     setNewAddress(!newaddress);
//   };

//   const handleSavedAddressChange = (selectedAddress: FormData | null) => {
//     setSelectedSavedAddress(selectedAddress);
//   };

  return (
    <div className="flex flex-col sm:flex-row m-auto justify-center gap-6 p-4 text-[14px]">
      <div className="flex-item w-[340px] md:w-[600px] relative bg-white flex-row p-6 box-border items-start mx-auto md:mx-0 justify-center gap-[24px] text-left text-base text-grey-scale-black-russian font-medium-16">
        <form className="mx-auto w-full  bg-white p-4" method="POST">
          <div className="justify-center ">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#030822] ">
                Billing Address
              </h2>
              {/* {showsavedAddress ? (
                <p className="underline cursor-pointer" onClick={handleaddress}>
                  {newaddress ? "New Address" : "Saved Address"}
                </p>
              ) : (
                ""
              )} */}
            </div>

            {/* {showAddress ? ( */}
              <div>
                <h2 className="text-xl font-bold text-[#030822]">
                  Saved Addresses
                </h2>
                <ul>
                  {/* {savedAddresses.map((address, index) => (
                    <li key={index}>
                      <label className="custom-radio">
                          <input
                            type="radio"
                            name="savedAddress"
                            checked={address === selectedSavedAddress}
                            onChange={() => handleSavedAddressChange(address)}
                          />
                          <span className="radio-label">
                            {address.addressLine1}
                          </span>
                      </label>
                    </li>
                  ))} */}
                </ul>
              </div>
            {/* ) : ( */}
              <div>
                <div className="mt-2">
                  <label className="block w-full text-gray-700">
                    Address line 1
                  </label>
                  <input
                    type="text"
                    name="addressLine1"
                    // value={formData.addressLine1}
                    // onChange={handleInputChange}
                    placeholder="Address line 1"
                    className="w-full px-4 py-3 mt-2 border text-[#C3C9D6] focus:border-blue-500 focus:bg-white focus:outline-none"
                    required
                  />
                </div>

                <div className="mt-2">
                  <label className="block w-full text-gray-700">
                    Address line 2
                  </label>
                  <input
                    type="text"
                    name="addressLine2"
                    // value={formData.addressLine2}
                    // onChange={handleInputChange}
                    placeholder="Flat no./House name"
                    className="w-full px-4 py-3 mt-2 border text-[#C3C9D6] focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="mt-2">
                  <label className="block w-full text-gray-700">State</label>
                  {/* <StateInput
                    selectedState={formData.selectedState}
                    onStateChange={handleStateChange}
                  /> */}
                </div>
                <div className="flex gap-2 my-2">
                  <div className="flex-1">
                    <label className="block w-full text-gray-700">
                      City/Town
                    </label>
                    <input
                      type="text"
                      name="cityTown"
                      // value={formData.cityTown}
                      // onChange={handleInputChange}
                      placeholder="Example: Mumbai"
                      className="w-full px-4 py-3 mt-2 border text-[#C3C9D6] focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>{" "}
                  <div className="flex-1">
                    <label className="block w-full text-gray-700">
                      Pincode
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      // value={formData.pincode}
                      // onChange={handleInputChange}
                      placeholder="Example: 400019"
                      className="w-full px-4 py-3 mt-2 border text-[#C3C9D6] focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-2 my-4">
                  <Image
                  src="assets/user.svg"
                  alt=""
                  width={20}
                  height={20}
                    // src={clickbox ? check : checked}
                    // onClick={handlecheckbox}
                    // alt="checked"
                  />
                  <p>Use this as your default Address</p>
                </div>
                <div>
                  <div className="flex gap-2 ">
                    <div className="flex-1  text-center ">
                      <button className="border border-black w-full h-full py-3">
                        Cancel
                      </button>
                    </div>
                    <div className="flex-1  text-center">
                      <button
                        className="bg-primary text-white w-full h-full py-3"
                        // onClick={handleSaveAddress}
                      >
                        Save Address
                      </button>
                    </div>
                  </div>

                  {/* {formData.isAddressSaved && (
                    <button className="bg-[#CFF8EF] w-full my-4 p-3">
                      Address saved successfully!
                    </button>
                  )} */}
                </div>
              </div>
            {/* )} */}
          </div>
        </form>
      </div>
      <div className="flex justify-center">
        <Checkout/>
      </div>
    </div>
  );
};

export default Address;


// import React from 'react'

// const Address = () => {
//   return (
//     <div>Address</div>
//   )
// }

// export default Address
