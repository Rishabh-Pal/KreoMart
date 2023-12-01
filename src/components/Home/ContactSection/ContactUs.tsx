import React from "react";

const Contact = () => {
  return (
    <div className="p-6 text-center">
      <form className="mx-auto max-w-[700px] text-lg">
        <h1 className="text-2xl mx-auto font-bold mb-4">
          Share Your Thoughts with Us
        </h1>
        <div className="flex gap-6 justify-between">
          <div className="mb-4 w-full">
            <label
              htmlFor="name"
              className="text-left block  mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="email"
              className="text-left block  mb-1"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-4 py-2 border border-black  rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">
            Message
          </label>
          <textarea
            id="message"
            className="w-full h-40 px-4 py-2 border border-black   focus:outline-none focus:border-primary-800"
          ></textarea>
        </div>

        <div className="justify-center">
          <button className="bg-primary py-2 px-6 text-white ">
            <div className="flex items-center">
              <div>Send Message</div>
              <div>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 16L18.5 12M18.5 12L14.5 8M18.5 12L6.5 12"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </form>
      <div className="mt-10">
        <div className="mb-1 font-semibold">For any query you can</div>
        <div className="flex justify-center ">
          <div>Whatsapp </div>{" "}
          <div className="mx-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="whatsapp">
                <path
                  id="Vector"
                  d="M12 22C17.5229 22 22 17.5228 22 12C22 6.47715 17.5229 2 12 2C6.47718 2 2.00003 6.47715 2.00003 12C2.00003 13.5114 2.33535 14.9446 2.93565 16.229L2.22301 20.6245C2.1135 21.3 2.69954 21.8834 3.37452 21.7709L7.72984 21.045C9.02483 21.6575 10.4724 22 12 22Z"
                  stroke="#030822"
                  stroke-width="1.5"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <g id="Vector_2">
                  <path
                    d="M16 15.1111V14.6749C16 14.1331 15.6701 13.6458 15.167 13.4446L14.7005 13.258C14.1789 13.0494 13.5845 13.2753 13.3333 13.7778C13.3333 13.7778 12.2222 13.5556 11.3333 12.6667C10.4444 11.7778 10.2222 10.6667 10.2222 10.6667C10.7247 10.4155 10.9506 9.82105 10.742 9.29949L10.5554 8.83296C10.3542 8.32988 9.86693 8 9.32509 8H8.88889C8.39797 8 8 8.39797 8 8.88889C8 12.8162 11.1838 16 15.1111 16C15.602 16 16 15.602 16 15.1111Z"
                    fill="#030822"
                  />
                </g>
              </g>
            </svg>
          </div>{" "}
          <div> or call us on 8976723743</div>{" "}
        </div>
        <div className="mt-4">
          <div className="mb-1 font-semibold">Opening hours</div>
          <div>Sunday - Saturday: 8:00am - 11pm</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
