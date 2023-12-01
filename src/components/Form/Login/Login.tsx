"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signIn, getCsrfToken, useSession  } from 'next-auth/react';
import { CtxOrReq } from "next-auth/client/_utils"; 
// import { useQuery } from "@tanstack/react-query";

function Login() { 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("/");
    } catch (error) {
      console.log(error);
    }

    const response = await fetch(
      "https://api.kreomart.com/api/auth/jwt/create",
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
      return router.push('/');
    } else {
      console.error("Login error:", response.statusText);
    }
    const data = await response.json();
    console.log(data)
  };

  const handleClick = () => {
    router.push("/register");
  };
  const handleforget = () => {
    router.push("/forget");
  };
  return (
    <div className=" flex items-center justify-center p-4">
      <div className="p-4 mx-auto rounded-2xl  max-w-md md:max-w-3xl w-full">
        <div className="items-center text-sm md:text-md">
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
            <h2 className="text-2xl font-bold text-gray-default text-center ">
              Sign in
            </h2>
          </div>
          <button
            type="button"
            onClick={() => signIn("google")}
            className="w-full flex h-16 my-2 justify-center text-center items-center border border-black"
          >
            <Image
              className="mr-2"
              src="./assets/Google.svg"
              alt="google"
              width={12}
              height={12}
            />
            Continue with Google
          </button>
          <button className="w-full flex h-16 my-2 justify-center text-center items-center border border-black">
            <Image
              className="mr-2"
              src="./assets/Facebook.svg"
              alt="google"
              width={12}
              height={12}
            />
            Continue with FaceBook
          </button>
          <div className="text-gray-400 text-center">OR</div>
          <form
            className="w-full"
            onSubmit={handleSubmit}
            action="#"
            method="POST"
          >
            <div>
              <label className="block w-full text-lg text-gray-600">
                username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              />
            </div>
            <div>
              <label className="  w-full text-lg text-gray-600">Password</label>
              {/* <div className=" text-xs text-red-default ">*</div> */}
            </div>
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
                  <Image
                    src="/assets/Eye Open.png"
                    className="items-center pt-2"
                    alt={""}
                    width={20}
                    height={20}
                  />
                ) : (
                  <Image
                    src="/assets/Eye cross.png"
                    className=" items-center pt-2"
                    alt={""}
                    width={20}
                    height={20}
                  />
                )}
              </button>
            </div>

            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold hover:text-primary-800 focus:text-blue-700 underline  underline-offset-8"
                onClick={handleforget}
              >
                Forgot Password?
              </a>
            </div>
            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                id="keepSignedIn"
                className="mr-2 w-7 h-7 rounded-none  border-none shadow-gray-600 accent-secondary-900"
              />

              <label htmlFor="keepSignedIn" className="text-base">
                Keep me signed in
              </label>
            </div>
            <p className="ml-10 text-gray-600 text-sm ">
              By checking this box you won&apos;t have to sign in as often on
              this device. For your security, we recommend only checking this
              box on your personal devices.
            </p>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-800 focus:bg-blue-400 text-base text-white font-semibold py-3 mt-4"
            >
              Sing in
            </button>
            <button
              onClick={handleClick}
              className="w-full border text-base border-black font-semibold py-3 mt-3 "
            >
              Create my account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context: CtxOrReq | undefined) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

export default Login;
