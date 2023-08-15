"use client";

import { User } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Register() {
  const [phone, setphone] = useState("");
  // const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const router = useRouter();
  const handleClick = () => {
    router.push("/login");
  };

  const handleRegistration = async (e: any) => {
    e.preventDefault();

    try {
      const UserData = { email: email, username: username, password: password };

      const response = await fetch(
        "https://kreomart.onrender.com/api/auth/users/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(UserData),
        }
      );
      console.log({ response });
    } catch (err) {
      console.log({ message: err });
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="p-5 mx-20 rounded-2xl items-center justify-center">
        <div className="items-center">
          <form
            className="mt-6 mx-20 w-[500px]"
            onSubmit={handleRegistration}
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
              <h2 className="text-2xl font-bold text-[#030822] text-center pb-4 ">
                Create your kreomart account
              </h2>

              <div>
                <label className="block w-full text-gray-700">
                  First and Last name
                </label>
                <input
                  type="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block w-full text-gray-700">
                  Phone number
                </label>
                <input
                  type="phone number"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                  placeholder="+91XXXXXXXXX"
                  className="w-full px-4 py-3 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block w-full text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>

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

              <div className="mt-4 flex items-center">
                <input type="checkbox" id="keepSignedIn" className="mr-2 " />

                <label htmlFor="keepSignedIn">Keep me signed in</label>
              </div>
              <p className="ml-6 text-gray-700 text-sm">
                By checking this box you won&apos;t have to sign in as often on this
                device. For your security, we recommend only checking this box
                on your personal devices.
              </p>
              <div className="mt-4 text-center">
                <p className="text-sm">
                  By creating an account, you are agreeing to the Target terms &
                  conditions and Target privacy policy,
                </p>
                <div>
                  <a
                    href="#"
                    className="text-[#020044] font-[500] hover:underline"
                  >
                    Terms & conditions
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-[#020044] font-[500] hover:underline"
                  >
                    Privacy policy
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full  bg-[#020044] hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold  px-4 py-3 mt-6"
              >
                Create my account
              </button>
              <button
                onClick={handleClick}
                className="w-full border border-black font-semibold px-4 py-3 mt-6"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
