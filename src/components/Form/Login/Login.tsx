"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch(
      "https://kreomart.onrender.com/api/auth/jwt/create",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );
    if (response.ok) {
      const { refresh, access } = await response.json();
      localStorage.setItem("access_token", `${access}`);
      console.log({ refresh, access });
    } else {
      console.error("Login error:", response.statusText);
    }
    // const data = await response.json();
  };
  const router = useRouter();

  const handleClick = () => {
    router.push("/register");
  };
  const handleforget = () => {
    router.push("/forget");
  };
  return (
    <div className=" min-h-screen  flex items-center justify-center">
      <div className="p-5 mx-20 rounded-2xl items-center justify-center">
        <div className="items-center">
          <form
            className="mt-6 mx-20 w-[500px]"
            onSubmit={handleSubmit}
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
                Sign in
              </h2>
            </div>
            <div>
              <label className="block w-full text-gray-700">User Name</label>
              <input
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              />
            </div>

            <label className="block w-full text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
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

            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold hover:text-[#020044] focus:text-blue-700"
                onClick={handleforget}
              >
                Forgot Password?
              </a>
            </div>
            <div className="mt-4 flex items-center">
              <input type="checkbox" id="keepSignedIn" className="mr-2 " />

              <label htmlFor="keepSignedIn">Keep me signed in</label>
            </div>
            <p className="ml-6 text-gray-700 text-sm">
              By checking this box you won&apos;t have to sign in as often on this
              device. For your security, we recommend only checking this box on
              your personal devices.
            </p>

            <button
              type="submit"
              className="w-full  bg-[#020044] hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold  px-4 py-3 mt-6"
            >
              Sing in
            </button>
            <button
              onClick={handleClick}
              className="w-full border border-black font-semibold px-4 py-3 mt-6"
            >
              Create my account
            </button>
          </form>

          <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-500" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-500" />
          </div>

          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 ">
            <span className="ml-4">Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
