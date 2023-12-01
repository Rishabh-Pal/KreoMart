import route from "@/routes";
import Link from "next/link";

import React from "react";
import Icon from "../shared/Icon";
import Image from "next/image";

const OrderDetail = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div className="flex justify-center gap-8 p-20">
          <div className="bg-white p-4 relative h-2/5">
            <div className="flex w-96 justify-between items-center text-base mb-5">
              <div>My Orders</div>
              <Link href={route.OrderHistory}>
                <Icon name="ArrowRight" size={24} />
              </Link>
            </div>
            <div className="flex w-96 justify-between items-center text-base my-5">
              <div>Account settings</div>
              <Link href={route.Profile}>
                <Icon name="ArrowRight" size={24} />
              </Link>
            </div>
            <div className="flex w-96 justify-between items-center text-base my-5">
              <div>Contact us</div>
              <Link href={route.Contact}>
                <Icon name="ArrowRight" size={24} />
              </Link>
            </div>
            <div className="flex w-96 justify-between items-center text-base my-5">
              <button>Log out</button>
            </div>
          </div>
          <div className="bg-white md:w-[500px] lg:w-[800px]  flex flex-col p-6 box-border items-start justify-start gap-[24px] text-sm">
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-lg">
              <div className="flex-1 relative tracking-[-0.4px] leading-[130%] font-medium">
                Order details
              </div>
              <div className="overflow-hidden flex flex-row items-center justify-center text-center text-sm text-primary border-b-[1px] border-solid border-primary">
                <div className="relative leading-[130%] font-medium">
                  Download invoice
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-gray-600">
              <div className="self-stretch relative leading-[130%]">
                Order ID: AHDT216793SGYEV
              </div>
              <div className="self-stretch relative leading-[130%]">
                Order placed: 2nd May 2023, Sat
              </div>
            </div>
            <div className="self-stretch relative box-border h-px border-t-2 border-solid border-gray-400" />
            <div className="self-stretch flex flex-col items-start justify-start gap-2 text-right">
              <div className="relative leading-[130%] font-medium">
                Shipping address
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-1 text-left text-gray-600">
                <div className="self-stretch relative leading-[130%]">
                  Komal Gupta
                </div>
                <div className="self-stretch relative leading-[130%]">
                  MS/RB-1/128/27 Wenden Avenue Road, T.H katariya marg,
                  MatungaMumbai, Maharashtra - 400019India
                </div>
                <div className="self-stretch relative leading-[130%]">
                  8652392200
                </div>
              </div>
            </div>
            <div className="self-stretch relative box-border h-px border-t-2 border-solid border-gray-400" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-right">
              <div className="relative leading-[130%] font-medium text-gray-default">
                1 item(s) Delivered
              </div>
              <div className="self-stretch relative leading-[130%] text-gray-600 text-left">
                Package delivered: 6th May 2023, Wed
              </div>
            </div>
            <div className="self-stretch h-[102px] flex flex-col items-start justify-between relative text-gray-600">
              <div className="self-stretch flex flex-row items-center justify-start gap-[24px] z-[0]">
                <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                  <Icon name={"Success"} size={18} />
                  <div className="flex-1 relative text-base leading-[130%]">
                    Order confirmed
                  </div>
                </div>
                <div className="relative leading-[130%] text-center">
                  2nd May 2023, Sat
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[24px] z-[1]">
                <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                  <Icon name={"Success"} size={18} />
                  <div className="flex-1 relative leading-[130%] text-base">
                    Shipped
                  </div>
                </div>
                <div className="relative leading-[130%] text-center">
                  4th May 2023, Mon
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[24px] z-[2]">
                <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                  <Icon name={"Success"} size={18} />
                  <div className="flex-1 relative leading-[130%] text-base">
                    Delivered
                  </div>
                </div>
                <div className="relative leading-[130%] text-center">
                  6th May 2023, Wed
                </div>
              </div>
              <div className="absolute my-0 mx-[!important] top-[23.5px] left-[6.5px] box-border w-px h-[13px] z-[3] border-r-[1px] border-solid border-seagreen" />
              <div className="absolute my-0 mx-[!important] top-[65.5px] left-[6.5px] box-border w-px h-[13px] z-[4] border-r-[1px] border-solid border-seagreen" />
            </div>
            <div className="self-stretch relative box-border h-px border-t-2 border-solid border-gray-400" />
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-grey-scale-carbon-gray">
              <Image
                height={83}
                width={70}
                className="relative w-[69.88px] h-[82px] object-cover"
                alt="productimg"
                src="/assets/jwel1.PNG"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-base">
                  <div className="flex-1 relative leading-[130%] text-gray-600 ">
                    Pink cotton top
                  </div>
                  <div className="relative leading-[130%] font-medium text-grey-scale-black-russian">
                    ₹156.00
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-base">
                  <div className="flex flex-row items-start justify-start gap-1 ">
                    <div className="relative leading-[130%] text-gray-600">{`Colour: `}</div>
                    <div className="relative leading-[130%] text-gray-default">
                      Pink
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[4px]">
                    <div className="relative leading-[130%] text-gray-600">
                      Size:
                    </div>
                    <div className="relative leading-[130%] text-gray-default">
                      S
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-baseline justify-start gap-[4px] text-gray-default text-base">
                  <div className="relative leading-[130%] ">{`Qty: `}</div>
                  <div className="relative leading-[130%]">2</div>
                </div>
              </div>
            </div>
            <div className="self-stretch relative box-border h-px border-t-2 border-solid border-gray-400" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-right">
              <div className="relative leading-[130%] text-lg font-medium text-gray-default">
                Payment details
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-gray-500">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[24px]">
                      <div className="flex-1 relative leading-[130%] text-gray-500">
                        Payment method
                      </div>
                      <div className="relative leading-[130%] font-medium text-gray-default text-right">
                        UPI
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="relative leading-[130%] text-gray-500">
                      Subtotal
                    </div>
                    <div className="relative leading-[130%] font-medium  text-gray-default text-right">
                      ₹468
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="relative leading-[130%] text-gray-500  ">
                      Discount
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[4px] text-right text-secondary">
                      <div className="relative box-border w-[7px] h-px border-t-[1px] border-solid border-x-secondary" />
                      <div className="relative leading-[130%] font-medium">
                        - ₹68
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="relative leading-[130%] text-gray-500">
                      Convenience fee
                    </div>
                    <div className="relative leading-[130%] font-medium text-grey-scale-black-russian text-right">
                      ₹30
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-baseline justify-between text-base text-gray-default">
                  <div className="relative tracking-[-0.4px] leading-[130%] text-lg font-medium">
                    Total
                  </div>
                  <div className="relative text-3xl leading-[130%] font-medium text-right">
                    ₹430
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-secondary-200 flex flex-row py-2 px-6 items-start justify-start text-center text-primary text-base">
              <div className="flex-1 relative leading-[130%] font-medium">
                Total savings: ₹92.00
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW*/}
      <div className="block md:hidden">
        <div className="flex justify-center mx-0 text-base items-center gap-6 my-6 p-4">
          <Link className="underline cursor-pointer" href={route.OrderHistory}>
            My orders
          </Link>
          <Link className="underline cursor-pointer" href={route.Profile}>
            Account setting
          </Link>
          <Link className="underline cursor-pointer" href={route.Contact}>
            Contact us
          </Link>
          <Link className="underline cursor-pointer" href={route.OrderHistory}>
            Log out
          </Link>
        </div>
        <div className="bg-white  flex flex-col p-6 box-border items-start justify-start gap-[24px] text-sm">
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-lg">
            <div className="flex-1 relative tracking-[-0.4px] leading-[130%] text-lg font-medium">
              Order details
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-center text-center text-sm text-primary border-b-2 border-solid border-primary">
              <div className="relative leading-[130%] text-lg font-medium">
                Download invoice
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-2 text-base text-gray-600">
            <div className="self-stretch relative leading-[130%]">
              Order ID: AHDT216793SGYEV
            </div>
            <div className="self-stretch relative leading-[130%]">
              Order placed: 2nd May 2023, Sat
            </div>
          </div>
          <div className="self-stretch relative box-border h-px border-t-2 border-solid border-gray-400" />
          <div className="self-stretch flex flex-col items-start justify-start gap-2  text-right">
            <div className="relative leading-[130%] text-lg font-medium">
              Shipping address
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-left text-base text-gray-600">
              <div className="self-stretch relative leading-[130%]">
                Komal Gupta
              </div>
              <div className="self-stretch relative leading-[130%]">
                MS/RB-1/128/27 Wenden Avenue Road, T.H katariya marg,
                MatungaMumbai, Maharashtra - 400019India
              </div>
              <div className="self-stretch relative leading-[130%]">
                8652392200
              </div>
            </div>
          </div>
          <div className="self-stretch relative box-border h-px border-t-2 border-solid border-gray-400" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-right">
            <div className="relative leading-[130%] text-lg font-medium">
              1 item(s) Delivered
            </div>
            <div className="self-stretch relative leading-[130%] text-gray-600 text-start">
              Package delivered: 6th May 2023, Wed
            </div>
          </div>
          <div className="self-stretch h-[102px] flex flex-col items-start justify-between relative text-gray-600">
            <div className="self-stretch flex flex-row items-center justify-start gap-[24px] z-[0]">
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                <Icon name={"Success"} size={20} />
                <div className="flex-1 relative leading-[130%] text-base">
                  Order confirmed
                </div>
              </div>
              <div className="relative leading-[130%] text-center">
                2nd May 2023, Sat
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[24px] z-[1]">
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                <Icon name={"Success"} size={20} />
                <div className="flex-1 relative leading-[130%] text-base">
                  Shipped
                </div>
              </div>
              <div className="relative leading-[130%] text-center">
                4th May 2023, Mon
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[24px] z-[2]">
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                <Icon name={"Success"} size={20} />
                <div className="flex-1 relative leading-[130%] text-base">
                  Delivered
                </div>
              </div>
              <div className="relative leading-[130%] text-center">
                6th May 2023, Wed
              </div>
            </div>
            <div className="absolute my-0 mx-[!important] top-[23.5px] left-[6.5px] box-border w-px h-[13px] z-[3] border-r-[1px] border-solid border-seagreen" />
            <div className="absolute my-0 mx-[!important] top-[65.5px] left-[6.5px] box-border w-px h-[13px] z-[4] border-r-[1px] border-solid border-seagreen" />
          </div>
          <div className="self-stretch relative box-border h-px border-t-2 border-solid border-gray-400" />
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-grey-scale-carbon-gray">
            <Image
              height={83}
              width={70}
              className="relative w-[69.88px] h-[82px] object-cover"
              alt="productimg"
              src="/assets/jwel1.PNG"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px] text-base">
              <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-base">
                <div className="flex-1 relative leading-[130%] text-gray-600">
                  Pink cotton top
                </div>
                <div className="relative leading-[130%] font-medium text-gray-default">
                  ₹156.00
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                <div className="flex flex-row items-start justify-start gap-[4px]">
                  <div className="relative leading-[130%] text-gray-600">{`Colour: `}</div>
                  <div className="relative leading-[130%] text-gray-default">
                    Pink
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[4px]">
                  <div className="relative leading-[130%] text-gray-600">
                    Size:
                  </div>
                  <div className="relative leading-[130%] text-gray-default">
                    S
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-baseline justify-start gap-[4px] text-gray-default">
                <div className="relative leading-[130%]">{`Qty: `}</div>
                <div className="relative leading-[130%]">2</div>
              </div>
            </div>
          </div>
          <div className="self-stretch relative box-border h-px border-t-2 border-solid border-gray-400" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-right">
            <div className="relative leading-[130%] text-lg font-medium">
              Payment details
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-grey-scale-cool-gray">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-start text-base gap-[24px]">
                    <div className="flex-1 relative leading-[130%] text-gray-500">
                      Payment method
                    </div>
                    <div className="relative leading-[130%] font-medium text-gray-default text-right">
                      UPI
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between text-base">
                  <div className="relative leading-[130%] text-gray-500">
                    Subtotal
                  </div>
                  <div className="relative leading-[130%] font-medium text-gray-default text-right">
                    ₹468
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between text-base">
                  <div className="relative leading-[130%]  text-gray-500">
                    Discount
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[4px] text-right text-secondary">
                    <div className="relative leading-[130%] font-medium">
                      - ₹68
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative leading-[130%] text-base text-gray-500">
                    Convenience fee
                  </div>
                  <div className="relative leading-[130%] font-medium text-gray-default text-right">
                    ₹30
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-baseline justify-between text-base text-grey-scale-black-russian">
                <div className="relative tracking-[-0.4px] leading-[130%] text-lg font-medium">
                  Total
                </div>
                <div className="relative text-2xl leading-[130%] font-medium text-right">
                  ₹430
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-secondary-800-2 flex flex-row py-2 px-6 items-start justify-start text-center text-gray-default bg-secondary-200">
            <div className="flex-1 relative leading-[130%] text-base font-medium">
              Total savings: ₹92.00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
