"use client";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../shared/Button/Button";
import Icon from "../shared/Icon";

import route from "@/routes";

const Profile_details = () => {
  const [editdetails, seteditlDetails] = useState(false);
  const [editaddress, setEditAddress] = useState(false);

  const handleAddress = () => {
    setEditAddress(!editaddress);
  };

  const handleDetails = () => {
    seteditlDetails(!editdetails);
  };
  return (
    <div>
      <div className=" bg-white flex flex-col p-6 box-border items-start justify-start gap-[24px] text-left text-lg text-grey-scale-black-russian font-book-16">
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px]">
          <div className="flex-1  text-lg font-medium">Personal details</div>
          <div className="overflow-hidden flex flex-row items-center justify-center text-center text-sm text-primary-cetacean-blue-10 border-b-[1px] border-solid border-primary-cetacean-blue-10">
            <button
              className=" text-base underline underline-offset-1 font-medium"
              onClick={handleDetails}
            >
              Edit
            </button>
          </div>
        </div>
        {!editdetails ? (
          <div className="self-stretch flex flex-col items-start justify-start gap-4 text-base text-grey-scale-carbon-gray">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
              <div className=" ">First name</div>
              <div className="  text-grey-scale-black-russian">Komal</div>
            </div>
            <div className=" flex flex-col items-start justify-start gap-[4px]">
              <div className=" ">Last name</div>
              <div className="  text-grey-scale-black-russian">Gupta</div>
            </div>
            <div className="  flex flex-col items-start justify-start gap-[4px]">
              <div className=" ">Phone</div>
              <div className="  text-grey-scale-black-russian">8652392200</div>
            </div>
            <div className=" flex flex-col items-start justify-start gap-[4px] text-grey-scale-cool-gray">
              <div className=" ">Email</div>
              <div className=" text-grey-scale-black-russian">
                komalgupta884@gmail.com
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleDetails}>
            <div className="relative bg-grey-scale-white w-full flex flex-col p-6 box-border items-start justify-start gap-[24px] text-left text-lg text-grey-scale-black-russian font-semi-14">
              <div>
                <label className="block w-full text-gray-700">First Name</label>
                <input
                  type="firstname"
                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block w-full text-gray-700">Last Name</label>
                <input
                  type="lastname"
                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block w-full text-gray-700">
                  Phone number
                </label>
                <input
                  type="phonenumber"
                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block w-full text-gray-700">Email</label>
                <input
                  type="email"
                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                <div className=" text-sm font-book-14 text-grey-scale-cool-gray text-left mix-blend-normal">
                  After you change your email, make sure you click on the link
                  in the confirmation email we sent you.
                </div>
              </div>
              <div className=" flex flex-row items-start justify-start gap-[24px] text-center text-sm text-grey-scale-black-russian">
                <button
                  type="submit"
                  className="flex-1 flex flex-row py-4 px-6 items-center justify-center border-[1px] border-solid border-grey-scale-black-russian"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary-cetacean-blue-10 flex flex-row py-4 px-6 items-center justify-center text-grey-scale-white"
                >
                  Update
                </button>
              </div>
            </div>
            <div className="  bg-grey-scale-white w-full flex flex-col p-6 box-border items-start justify-start gap-[24px] text-left text-lg text-grey-scale-black-russian font-semi-14">
              {/* <div className="self-stretch flex-1 relative tracking-[-0.4px] leading-[130%] font-medium flex items-center">
                      Personal details
                    </div> */}
              <div className="  flex flex-col items-start justify-start gap-[24px] text-base text-grey-scale-cool-gray">
                <div className="    flex flex-col items-start justify-start gap-[4px]">
                  <div className="  flex flex-row items-start justify-start">
                    <label className=" mix-blend-normal">First name</label>
                  </div>
                  <div className=" flex flex-col items-start justify-start text-sm text-grey-scale-carbon-gray">
                    <div className="  bg-grey-scale-white box-border h-[52px] flex flex-row p-4 items-center justify-start border-[1px] border-solid border-grey-scale-chalk-gray">
                      <div className="flex-1 flex flex-row items-start justify-start">
                        <input className="flex-1   font-medium" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="  flex flex-col items-start justify-start gap-[4px]">
                  <div className="  flex flex-row items-start justify-start">
                    <label className=" mix-blend-normal">Last name</label>
                  </div>
                  <div className=" flex flex-col items-start justify-start text-sm text-grey-scale-carbon-gray">
                    <div className="  bg-grey-scale-white box-border h-[52px] flex flex-row p-4 items-center justify-start border-[1px] border-solid border-grey-scale-chalk-gray">
                      <div className="flex-1 flex flex-row items-start justify-start">
                        <input className="flex-1  font-medium" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="  flex flex-col items-start justify-start gap-[4px]">
                  <div className="  flex flex-row items-start justify-start">
                    <label className="  mix-blend-normal">Phone number</label>
                  </div>
                  <div className="  flex flex-col items-start justify-start text-sm text-grey-scale-carbon-gray">
                    <div className="  bg-grey-scale-white box-border h-[52px] flex flex-row p-4 items-center justify-start border-[1px] border-solid border-grey-scale-chalk-gray">
                      <div className="flex-1 flex flex-row items-start justify-start">
                        <input className="flex-1  font-medium" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="  flex flex-col items-start justify-start gap-[4px]">
                  <div className=" flex flex-col items-start justify-start gap-[4px]">
                    <div className="  flex flex-row items-start justify-start">
                      <label className="  mix-blend-normal">Email</label>
                    </div>
                    <div className="  flex flex-col items-start justify-start text-sm text-grey-scale-carbon-gray">
                      <div className="self-stretch bg-grey-scale-white box-border h-[52px] flex flex-row p-4 items-center justify-start border-[1px] border-solid border-grey-scale-chalk-gray">
                        <div className="flex-1 flex flex-row items-start justify-start">
                          <input className="flex-1   font-medium" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="  text-sm   mix-blend-normal">
                  After you change your email, make sure you click on the link
                  in the confirmation email we sent you.
                </div>
              </div>
              <div className="  flex flex-row items-start justify-start gap-[24px] text-center text-sm text-grey-scale-black-russian">
                <div className="flex-1 flex flex-row py-4 px-6 items-center justify-center border-[1px] border-solid border-grey-scale-black-russian">
                  <button className=" ">Cancel</button>
                </div>
                <div className="flex-1 bg-primary-cetacean-blue-10 flex flex-row py-4 px-6 items-center justify-center text-grey-scale-white">
                  <Button className="relative w-full" type="submit">
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
      {!editaddress ? (
        <div className="bg-white mt-12 relative bg-grey-scale-white w-full flex flex-col p-6 box-border items-start justify-start gap-[24px] text-left text-base text-grey-scale-black-russian font-medium-14">
          <div className="flex-1 relative text-lg tracking-[-0.4px] leading-[130%] font-medium flex items-center w-[609px]">
            Address book
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative tracking-[-0.4px] leading-[130%] font-medium">
                Komal Gupta
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <div className="self-stretch relative leading-[130%]">
                  MS/RB-1/128/27 Wenden Avenue Road, T.H katariya marg,
                  MatungaMumbai, Maharashtra - 400019India
                </div>
                <div className="self-stretch relative leading-[130%]">
                  8652392200
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start text-center text-sm text-primary-cetacean-blue-10">
              <div className="box-border h-5 overflow-hidden shrink-0 flex flex-row items-center justify-center border-b-[1px] border-solid border-primary-cetacean-blue-10">
                <button
                  className="relative underline underline-offset-3 leading-[130%] font-medium"
                  onClick={handleAddress}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-grey-scale-smoke-white" />
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative tracking-[-0.4px] leading-[130%] font-medium">
                Rahul Gupta
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <div className="self-stretch relative leading-[130%]">
                  MS/RB-1/128/27 Wenden Avenue Road, T.H katariya marg,
                  MatungaMumbai, Maharashtra - 400019India
                </div>
                <div className="self-stretch relative leading-[130%]">
                  8652392200
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start text-center text-sm text-primary-cetacean-blue-10">
              <div className="box-border h-5 overflow-hidden shrink-0 flex flex-row items-center justify-center border-b-[1px] border-solid border-primary-cetacean-blue-10">
                <button
                  className="relative leading-[130%] font-medium underline underline-offset-3"
                  onClick={handleAddress}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className=" bg-white  relative bg-grey-scale-white w-full flex flex-col p-6 box-border items-start justify-start gap-[24px] text-left text-lg text-grey-scale-black-russian font-semi-14">
            <div className="flex-1 relative tracking-[-0.4px] leading-[130%] font-medium flex items-center w-[609px]">
              Address book
            </div>

            <form onSubmit={handleAddress}>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-xs text-grey-scale-cool-gray">
                <div className="self-stretch flex flex-row items-center justify-start gap-[24px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                      <label className="relative leading-[130%] mix-blend-normal">
                        Name
                      </label>
                      <div className="relative tracking-[-0.01em] font-regular-12-text-xs-allcaps text-secondary-cranberry-red-10 mix-blend-normal">
                        *
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-sm text-grey-scale-carbon-gray">
                      <div className="self-stretch bg-grey-scale-white box-border h-[52px] flex flex-row p-4 items-center justify-start border-[1px] border-solid border-grey-scale-chalk-gray">
                        <div className="flex-1 flex flex-row items-start justify-start">
                          <input
                            className="flex-1 relative leading-[130%] font-medium"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                      <label className="relative leading-[130%] mix-blend-normal">
                        Phone
                      </label>
                      <label className="relative tracking-[-0.01em] font-regular-12-text-xs-allcaps text-secondary-cranberry-red-10 mix-blend-normal">
                        *
                      </label>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-sm text-grey-scale-carbon-gray">
                      <div className="self-stretch bg-grey-scale-white box-border h-[52px] flex flex-row p-4 items-center justify-start border-[1px] border-solid border-grey-scale-chalk-gray">
                        <div className="flex-1 flex flex-row items-start justify-start">
                          <input
                            className="flex-1 relative leading-[130%] font-medium"
                            type="text"
                            placeholder="8652392200"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                    <label className="relative leading-[130%] mix-blend-normal">
                      Address line 1
                    </label>
                    <label className="relative tracking-[-0.01em] font-regular-12-text-xs-allcaps text-secondary-cranberry-red-10 mix-blend-normal">
                      *
                    </label>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-sm text-grey-scale-carbon-gray">
                    <div className="self-stretch bg-grey-scale-white box-border h-[52px] flex flex-row p-4 items-center justify-start border-[1px] border-solid border-grey-scale-chalk-gray">
                      <div className="flex-1 flex flex-row items-start justify-start">
                        <input
                          className="flex-1 relative leading-[130%] font-medium"
                          placeholder=" Central railway colony"
                          required
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                    <label className="relative leading-[130%] mix-blend-normal">
                      Address line 2
                    </label>
                    <label className="relative tracking-[-0.01em] font-regular-12-text-xs-allcaps text-secondary-cranberry-red-10 mix-blend-normal">
                      *
                    </label>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-sm text-grey-scale-carbon-gray">
                    <div className="self-stretch bg-grey-scale-white box-border h-[52px] flex flex-row p-4 items-center justify-start border-[1px] border-solid border-grey-scale-chalk-gray">
                      <div className="flex-1 flex flex-row items-start justify-start">
                        <input
                          className="flex-1 relative leading-[130%] font-medium"
                          placeholder="MS/RB-2/123/4"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                    <label className="relative leading-[130%] mix-blend-normal">
                      State
                    </label>
                    <label className="relative tracking-[-0.01em] font-regular-12-text-xs-allcaps text-secondary-cranberry-red-10 mix-blend-normal">
                      *
                    </label>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-sm text-grey-scale-carbon-gray">
                    <div className="self-stretch bg-grey-scale-white box-border h-[52px] flex flex-row p-4 items-center justify-start gap-[12px] border-[1px] border-solid border-grey-scale-chalk-gray">
                      <div className="flex-1 flex flex-row items-start justify-start">
                        <input
                          className="flex-1 relative leading-[130%] font-medium"
                          placeholder=" Maharashtra"
                          required
                          type="text"
                        />
                      </div>
                      <button>
                        <img
                          className="relative w-6 h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/assets/Arrow Down.svg"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[24px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                      <label className="relative leading-[130%] mix-blend-normal">
                        Town/City
                      </label>
                      <label className="relative tracking-[-0.01em] font-regular-12-text-xs-allcaps text-secondary-cranberry-red-10 mix-blend-normal">
                        *
                      </label>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-sm text-grey-scale-carbon-gray">
                      <div className="self-stretch bg-grey-scale-white box-border h-[52px] flex flex-row p-4 items-center justify-start border-[1px] border-solid border-grey-scale-chalk-gray">
                        <div className="flex-1 flex flex-row items-start justify-start">
                          <input
                            className="flex-1 relative leading-[130%] font-medium"
                            placeholder=" Mumbai"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                      <label className="relative leading-[130%] mix-blend-normal">
                        Pincode
                      </label>
                      <label className="relative tracking-[-0.01em] font-regular-12-text-xs-allcaps text-secondary-cranberry-red-10 mix-blend-normal">
                        *
                      </label>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-sm text-grey-scale-carbon-gray">
                      <div className="self-stretch bg-grey-scale-white box-border h-[52px] flex flex-row p-4 items-center justify-start border-[1px] border-solid border-grey-scale-chalk-gray">
                        <div className="flex-1 flex flex-row items-start justify-start">
                          <input
                            className="flex-1 relative leading-[130%] font-medium"
                            placeholder="400019"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-sm text-grey-scale-carbon-gray">
                <div className="relative w-[18px] h-[18px]">
                  <div className="absolute h-[93.83%] w-[93.83%] top-[3.09%] right-[3.09%] bottom-[3.09%] left-[3.09%] box-border border-[0.9px] border-solid border-grey-scale-cool-gray" />
                </div>
                <div className="flex-1 relative leading-[130%] font-medium">
                  Use this as your default address
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-center text-sm text-grey-scale-black-russian">
                <div className="flex-1 flex flex-row py-4 px-6 items-center justify-center border-[1px] border-solid border-grey-scale-black-russian">
                  <button className="relative leading-[130%]">Cancel</button>
                </div>
                <div className="flex-1 bg-[#020044] flex flex-row py-4 px-6 items-center justify-center text-white">
                  <button className="relative leading-[130%]" type="submit">
                    Save address
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className=" bg-white mt-12 relative bg-grey-scale-white w-full flex flex-col p-6 box-border items-start justify-start gap-[24px] text-left text-lg text-grey-scale-black-russian font-book-16">
        <div className="flex-1 relative tracking-[-0.4px] leading-[130%] font-medium flex items-center w-[609px]">
          Privacy
        </div>
        <Link
          href={route.ChangePassword}
          className="self-stretch relative text-base leading-[130%]"
        >
          Change password
        </Link>
      </div>
    </div>
  );
};

export default Profile_details;
