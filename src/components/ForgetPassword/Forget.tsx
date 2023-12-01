'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Forget = () => {
    const [username, setUsername] = useState('');
    const router = useRouter();
  const handleSubmit = () => {
    router.push('/login');
  };
  return (
    <div className=" flex items-center justify-center">
      <div className=" rounded-2xl items-center max-w-lg md:max-w-4xl justify-center">
        <div className="items-center  text-sm md:text-md">

        <form
          className="mt-6 mx-20 "
          onSubmit={handleSubmit}
          action="#"
          method="POST"
        >
          <div>
            <div className="text-center justify-center">
              <Image
                className="mx-auto p-2 "
                src="./assets/logo-mobo.svg"
                alt="Logo"
                width={40}
                height={40}
              />
            </div>
            <h2 className="text-2xl font-bold text-[#030822] text-center mb-10">
            Forgot password
            </h2>
          </div >
              <div className=" text-center mb-5">
              In order to change your password, we need to verify your identity. 
Enter the email address or mobile phone number associated with your Kreomart account.
              </div>
          <div>
              <label className="block w-full text-gray-700">User Name</label>
              <input
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full  bg-[#020044] hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold  px-4 py-3 mt-6"
            >
              continue
            </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Forget;
