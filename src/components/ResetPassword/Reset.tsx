'use client';
import React , {useState} from 'react'
import { useRouter } from "next/navigation";
const Reset = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState("");
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className=" flex items-center justify-center">
      <div className=" mx-20 rounded-2xl items-center justify-center">
        <div className="items-center">

        <form
          className="mt-6 mx-20 w-[500px]"
    
          action="#"
          method="POST"
        >
          <div>
            <div className="text-center justify-center">
              <img
                className="mx-auto p-2 w-[50px]"
                src="./assets/logo-mobo.svg"
                alt="Logo"
              />
            </div>
            <h2 className="text-2xl font-bold text-[#030822] text-center ">
            Reset Password
            </h2>
          </div >
              
          <label className="block w-full text-gray-700">
                Create Password
              </label>
            <div className=" relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handlePasswordToggle}
                  className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-600 cursor-pointer"
                >
                  {showPassword ? (
                    <img
                      src="/assets/Eye Open.png"
                      className="w-[30px] items-center pt-2"
                    />
                  ) : (
                    <img
                      src="/assets/Eye cross.png"
                      className="w-[30px] items-center pt-2"
                    />
                  )}
                </button>
              </div>
            <label className="block w-full text-gray-700">
                Confirm Password
              </label>
            <div className=" relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handlePasswordToggle}
                  className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-600 cursor-pointer"
                >
                  {showPassword ? (
                    <img
                      src="/assets/Eye Open.png"
                      className="w-[30px] items-center pt-2"
                    />
                  ) : (
                    <img
                      src="/assets/Eye cross.png"
                      className="w-[30px] items-center pt-2"
                    />
                  )}
                </button>
              </div>

            <button
              type="submit"
              className="w-full  bg-[#020044] hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold  px-4 py-3 mt-6"
            >
              Change Password
            </button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Reset