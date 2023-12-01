'use client';
import React , {useState} from 'react'
import { useRouter } from "next/navigation";
import Image from 'next/image';

const Reset = () => {
    // const [username, setUsername] = useState('');
    const [createpassword, setcreatePassword] = useState("");
    const [confirmpassword, setconfirmPassword] = useState("");
    const router = useRouter();
    const [showconfirmPassword, setShowconfirmPassword] = useState(false);
    const [showcreatePassword, setShowcreatePassword] = useState(false);
    const [createpasswordError, setcreatePasswordError] = useState<JSX.Element | string>(''); 
    const [confirmpasswordError, setconfirmPasswordError] = useState<JSX.Element | string>(''); 

  const handlecreatePasswordToggle = () => {
    setShowcreatePassword(!showcreatePassword);
  };
  const handleconfirmPasswordToggle = () => {
    setShowconfirmPassword(!showconfirmPassword);
  };


  const validatePassword = (password: string) => {
    // Use a regular expression to check if the password meets the criteria
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePassword(createpassword)) {
      setcreatePasswordError(
        <div className="mt-1">
          <div>
          <div>Must contain:</div>
          <div className='text-[#8991A4]'>8-20 characters</div>
          </div>
          
          <div>Any two of the following:</div>
          <div className='flex text-[#8991A4]'>
            <input type="checkbox" checked />
          <div>Lowercase letter </div>
          <div>Uppercase letter </div>
          <div>Number </div>
          <div>Special characters </div>
          </div>
          
        </div>
      );
      if(createpassword!=confirmpassword){
        setconfirmPasswordError(
          <div>
            Password not matched
          </div>
        )
      }
      return;
    }

    setcreatePasswordError('');

  };

  return (
    <div className=" flex items-center justify-center">
      <div className=" rounded-2xl items-center max-w-lg sm:max-w-4xl w-full">
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
                className="mx-auto p-2"
                src="./assets/logo-mobo.svg"
                alt="Logo"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-2xl mb-4 font-bold text-[#030822] text-center ">
            Reset Password
            </h2>
          </div >
              
          <label className="block w-full text-gray-700">
                Create Password
              </label>
            <div className=" relative">
                <input
                  type={showcreatePassword ? "text" : "password"}
                  value={createpassword}
                  onChange={(e) => setcreatePassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handlecreatePasswordToggle}
                  className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-600 cursor-pointer"
                >
                  {showcreatePassword ? (
                    <Image
                    src="/assets/Eye Open.png"
                    className="items-center pt-2" alt={""} 
                    width={20} height={20}                   />
                ) : (
                  <Image
                      src="/assets/Eye cross.png"
                      className=" items-center pt-2" alt={""}     
                      width={20} height={20}               />
                  )}
                </button>
              </div>
              {createpasswordError && (
                <p className="text-sm mt-1">{createpasswordError}</p>
              )}
            <label className="block w-full text-gray-700">
                Confirm Password
              </label>
            <div className=" relative">
                <input
                  type={showconfirmPassword ? "text" : "password"}
                  value={confirmpassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleconfirmPasswordToggle}
                  className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-600 cursor-pointer"
                >
                  {showconfirmPassword ? (
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
              {confirmpasswordError && (
                <p className="text-sm mt-1">{confirmpasswordError}</p>
              )}
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