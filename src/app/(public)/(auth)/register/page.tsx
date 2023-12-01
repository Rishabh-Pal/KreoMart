"use client";
import { User } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";



function RegisterPage() {
  // const [phone, setphone] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const router = useRouter();
  const handleClick = () => {
    router.push("/login");
  };
  const validateFirstname = (value: string) => {
    if (value.trim() === "") {
      return "First name is required.";
    }
    return "";
  };

  // Custom validation function for lastname
  const validateLastname = (value: string) => {
    if (value.trim() === "") {
      return "Last name is required.";
    }
    return "";
  };

  // Event handlers for input fields
  const handleFirstnameChange = (e: any) => {
    const value = e.target.value;
    setFirstname(value);
    setFirstnameError(validateFirstname(value));
  };

  const handleLastnameChange = (e: any) => {
    const value = e.target.value;
    setLastname(value);
    setLastnameError(validateLastname(value));
  };

  const validateUsername = (value:string)=>{
    return ;
  }

  // const validatePhone = (value: string) => {
  //   if (!value.match(/^\+\d{11}$/)) {
  //     return "Please enter a valid phone number (e.g., +911234567890)";
  //   }
  //   return "";
  // };

  // Custom validation function for email
  const validateEmail = (value: string) => {
    if (!value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  // Custom validation function for password
  const validatePassword = (value: string) => {
    const isLengthValid = value.length >= 8 && value.length <= 20;

    const hasLowercase = /[a-z]/.test(value);
    const hasUppercase = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*]/.test(value); // Customize this with your own special characters

    const meetsCriteria =
      isLengthValid &&
      (hasLowercase ? 1 : 0) +
        (hasUppercase ? 1 : 0) +
        (hasNumber ? 1 : 0) +
        (hasSpecialCharacter ? 1 : 0) >=
        2;

    const requirements = [
      `8-20 characters ${isLengthValid ? "✅" : "❌"}`,
      `At least one lowercase letter ${hasLowercase ? "✅" : "❌"}`,
      `At least one uppercase letter ${hasUppercase ? "✅" : "❌"}`,
      `At least one number ${hasNumber ? "✅" : "❌"}`,
      `At least one special character ${hasSpecialCharacter ? "✅" : "❌"}`,
    ];

    const errorMessage =
      "Password must meet the following criteria:\n" + requirements.join("\n");

    return meetsCriteria
      ? "Password strength: Good\n" + requirements.join("\n")
      : errorMessage;
  };

  // Event handlers for input fields
  const handleUsernameChange = (e: any) => {
    const value = e.target.value;
    setUsername(value);
    // setUsernameError(validateUsername(value));
    // setPhoneError(validatePhone(value));
  };

  const handleEmailChange = (e: any) => {
    const value = e.target.value;
    setemail(value);
    setEmailError(validateEmail(value));
  };

  const handlePasswordChange = (e: any) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value));
  };

  const handleRegistration = async (e: any) => {
    e.preventDefault();

    try {
      const UserData = { first_name: firstname, last_name: lastname, email: email, username: username, password: password };

      const response = await fetch(
        "https://api.kreomart.com/api/auth/users/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(UserData),
        }
      );
      console.log(response );
    } catch (err) {
      console.log({ message: err });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="p-4 mx-auto rounded-2xl  max-w-md md:max-w-2xl w-full">
        <div className="items-center text-sm md:text-md">
        <div className="text-center justify-center">
                <Image
                  className="mx-auto p-2 "
                  src="./assets/logo-mobo.svg"
                  alt="Logo"
                  width={30}
                  height={30}
                />
              </div>
              <h2 className="text-2xl font-bold text-[#030822] text-center pb-4 ">
                Create your kreomart account
              </h2>
        <button 
              type="button"
               onClick={()=>signIn("google")}
              className="w-full flex h-16 my-2 justify-center text-center items-center border border-black">
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
          <form className="w-full" onSubmit={handleRegistration} method="POST">
            <div>
              
             

              <div className="text-gray-400 text-center">OR</div>

              <div>
                <label className="block w-full text-base text-gray-600">First name</label>
                <input
                  type="username"
                  value={firstname}
                  onChange={handleFirstnameChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              {firstnameError && (
                <div className="text-red-default text-sm">{firstnameError}</div>
              )}

              <div>
                <label className="block w-full text-base text-gray-600">Last name</label>
                <input
                  type="username"
                  value={lastname}
                  onChange={handleLastnameChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              {lastnameError && (
                <div className="text-red-default text-sm">{lastnameError}</div>
              )}

              <div>
                <label className="block w-full text-base text-gray-600">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="Example123"
                  className="w-full px-4 py-3 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              {usernameError && (
                <div className="text-red-default text-sm">{usernameError}</div>
              )}

              <div>
                <label className="block w-full text-base text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              {emailError && (
                <div className="text-red-default text-sm">{emailError}</div>
              )}

              <label className="block w-full text-base text-gray-600">
                Create Password
              </label>

              <div className=" relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                {passwordError && (
                  <div className="text-red-default text-sm">
                    {passwordError}
                  </div>
                )}
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
              <p className="ml-6 text-gray-600 text-sm">
                By checking this box you won&apos;t have to sign in as often on
                this device. For your security, we recommend only checking this
                box on your personal devices.
              </p>
              <div className="mt-4  text-gray-600">
                <p className="text-xs text-start">
                  By creating an account, you’re agreeing to the kreomart terms
                  & conditions and kreomart privacy policy
                </p>
                {/* <div>
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
                </div> */}
              </div>
              <button
                type="submit"
                className="w-full  bg-[#020044] hover:bg-blue-400 focus:bg-blue-400 text-base text-white font-semibold  px-4 py-3 mt-6"
              >
                Create my account
              </button>
              <button
                onClick={handleClick}
                className="w-full border text-base border-black font-semibold px-4 py-3 mt-6"
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

export default RegisterPage
