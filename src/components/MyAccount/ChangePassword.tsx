"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../shared/Button/Button";
import route from "@/routes";
import Icon from "../shared/Icon";
import Image from "next/image";
const ChangePassword = () => {
  // const [username, setUsername] = useState('');
  const [createpassword, setcreatePassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [changePassword, setchangePassword] = useState(false);
  const router = useRouter();
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);
  const [showcreatePassword, setShowcreatePassword] = useState(false);
  const [createpasswordError, setcreatePasswordError] = useState<
    JSX.Element | string
  >("");
  const [confirmpasswordError, setconfirmPasswordError] = useState<
    JSX.Element | string
  >("");

  const handleChangePassword = () => {
    setchangePassword(!changePassword);
  };

  const handlecreatePasswordToggle = () => {
    setShowcreatePassword(!showcreatePassword);
  };
  const handleconfirmPasswordToggle = () => {
    setShowconfirmPassword(!showconfirmPassword);
  };

  const validatePassword = (password: string) => {
    // Use a regular expression to check if the password meets the criteria
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePassword(createpassword)) {
      setcreatePasswordError(
        <div className="mt-1">
          <div>
            <div>Must contain:</div>
            <div className="text-[#8991A4]">8-20 characters</div>
          </div>

          <div>Any two of the following:</div>
          <div className="flex text-[#8991A4]">
            <input type="checkbox" checked />
            <div>Lowercase letter </div>
            <div>Uppercase letter </div>
            <div>Number </div>
            <div>Special characters </div>
          </div>
        </div>
      );
      if (createpassword != confirmpassword) {
        setconfirmPasswordError(<div>Password not matched</div>);
      }
      return;
    }

    setcreatePasswordError("");
  };
  return (
    <div className="flex  items-center justify-center">
      {!changePassword ? (
        <div className=" mx-20 rounded-2xl items-center justify-center">
          <div className="items-center">
            <form
              className="mt-6 mx-20 w-[500px]"
              onSubmit={handleSubmit}
              action="#"
              method="POST"
            >
              <div>
                <div className="text-center justify-center">
                  <Image
                    height={25}
                    width={25}
                    className="mx-auto p-2 w-[50px]"
                    src="/assets/logo-mobo.svg"
                    alt="Logo"
                  />
                </div>
                <h2 className="text-2xl font-bold text-[#030822] text-center ">
                  Change Password
                </h2>
              </div>

              <label className="block w-full text-gray-700">Old Password</label>
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
                    <Icon
                      name="EyeOpen"
                      size={24}
                      // src="/assets/Eye Open.png"
                      // className="w-[30px] items-center pt-2"
                    />
                  ) : (
                    <Icon
                      name="Eyecross"
                      size={24}
                      // src="/assets/Eye cross.png"
                      // className="w-[30px] items-center pt-2"
                    />
                  )}
                </button>
              </div>
              {createpasswordError && (
                <p className="text-sm mt-1">{createpasswordError}</p>
              )}
              <label className="block w-full text-gray-700">New Password</label>
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
                    <Icon name="EyeOpen" size={24} />
                  ) : (
                    <Icon name="Eyecross" size={24} />
                  )}
                </button>
              </div>
              {confirmpasswordError && (
                <p className="text-sm mt-1">{confirmpasswordError}</p>
              )}
              <button
                type="submit"
                className="w-full  bg-[#020044] hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold  px-4 py-3 mt-6"
                onClick={handleChangePassword}
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <div className="relative w-full flex flex-col py-[108px] px-0 box-border items-center justify-start gap-[20px] text-left text-5xl text-grey-scale-black-russian font-semi-14">
            <div className="flex flex-col items-center justify-start gap-[4px]">
              <Image
                height={25}
                width={25}
                className="relative w-8 h-8 object-cover"
                alt=""
                src="/assets/logo-mobo.svg"
              />
              <div className="relative leading-[130%]">
                Password changed successfully
              </div>
            </div>
            <div className="relative text-base leading-[130%] text-grey-scale-cool-gray mix-blend-normal">
              Your password has been changed.
            </div>
            {/* <div className="self-stretch bg-primary-cetacean-blue-10 flex flex-row py-4 px-6 items-center justify-center text-center text-sm text-grey-scale-white">
          <div className="relative leading-[130%]">Sign in</div>
        </div> */}

            <Button
              href={route.Login}
              type="submit"
              className="self-stretch bg-primary-cetacean-blue-10 flex flex-row py-4 px-6 items-center justify-center text-center text-sm text-grey-scale-white w-full"
              onClick={handleChangePassword}
            >
              <div className="relative leading-[130%]">Sign in</div>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangePassword;
