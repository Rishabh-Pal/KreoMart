import React from "react";
// import Image from "next/image";
import OrderSummary from "./OrderSummary";

function Address() {
  return (
    <div className="flex justify-center gap-6">
      {" "}
      <div className="justify-center">
        <form
          className="mt-6 mx-auto w-[500px] "
          // onSubmit={handleRegistration}
          method="POST"
        >
          <div className="justify-center">
            <h2 className="text-2xl font-bold text-[#030822]  pb-4 ">
              Address
            </h2>

            <div>
              <label className="block w-full text-gray-700">
                Address line 1
              </label>
              <input
                type="Address_line_1"
                // value={Address_line_1}
                // onChange={(e) => setUsername(e.target.value)}
                placeholder="Address line 1"
                className="w-full px-4 py-3 mt-2 border text-[#C3C9D6] focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block w-full text-gray-700">
                Address line 2
              </label>
              <input
                type="Address line 2"
                // value={phone}
                // onChange={(e) => setphone(e.target.value)}
                placeholder="Flat no./House name"
                className="w-full px-4 py-3 mt-2 border text-[#C3C9D6] focus:border-blue-500 focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block w-full text-gray-700">State</label>
              <input
                type="state"
                // value={email}
                // onChange={(e) => setemail(e.target.value)}
                placeholder="Select State"
                className="w-full px-4 py-3 mt-2 border text-[#C3C9D6] focus:border-blue-500 focus:bg-white focus:outline-none"
              />
            </div>
            <div className="flex justify-between">
              <div>
                <label className="block w-full text-gray-700">City/Town</label>
                <input
                  type="City/Town"
                  // value={email}
                  // onChange={(e) => setemail(e.target.value)}
                  placeholder="Example: Mumbai"
                  className="w-full px-4 py-3 mt-2 border text-[#C3C9D6] focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>{" "}
              <div>
                <label className="block w-full text-gray-700">Pincode</label>
                <input
                  type="state"
                  // value={email}
                  // onChange={(e) => setemail(e.target.value)}
                  placeholder="Example: 400019"
                  className="w-full px-4 py-3 mt-2 border text-[#C3C9D6] focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* <div>
        <OrderSummary />
      </div> */}
    </div>
  );
}

export default Address;
