"use client";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import "react-phone-number-input/style.css";
import { useRouter } from "next/navigation";
import { useUserAuth } from "@/context/AuthContext";
import Link from "next/link";
import Spinner from "@/components/Spinner/Spinner";
import { RiMessage3Fill } from "react-icons/ri";
import { CiLock } from "react-icons/ci";
import { LuMessageSquare } from "react-icons/lu";
import { MdOutlineLock } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Page = () => {
  const { signup, signin, loading, passwordError } = useUserAuth();
  // const [passError, setPassError] = useState(false)
  const router = useRouter();
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    number: "",
    otp: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [verificationStatus, setVerificationStatus] = useState(null); // null, 'success', or 'failed'
  const [phoneNumber, setPhoneNumber] = useState();

  const [errorMessage, setErrorMessage] = useState("");
  const handlePhoneInputChange = (value) => {
    const valueInput = value.target.value;

    // Check if the input starts with "+92"
    if (valueInput.startsWith("964")) {
      setErrorMessage("Please enter the number without the country code.");
    }
    // Check if the input starts with "0"
    // else if (valueInput.startsWith('0')) {
    //   setErrorMessage('Please remove the leading 0.');
    // }
    else {
      setErrorMessage("");
      setPhoneNumber(`+964${valueInput}`);
      setFormData({ ...formData, number: `+964${valueInput}` });
    }
  };

  const handleOtpChange = (e) => {
    setFormData({ ...formData, otp: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const validateForm = () => {
    const formErrors = {};
    const phoneNumber = parsePhoneNumberFromString(formData.number);

    if (!formData.number) {
      formErrors.number = "Number is required";
    } else if (phoneNumber && !phoneNumber.isValid()) {
      formErrors.number = "Invalid phone number";
    }

    if (verificationStatus === "success") {
      if (!formData.otp) {
        formErrors.otp = "OTP is required";
      }
    } else {
      if (!formData.password) {
        formErrors.password = "Password is required";
      }
    }

    return formErrors;
  };

  const [invalid, setInvalid] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (verificationStatus === null) {
      setIsLoading(true);
      // Send phone number to server
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-phone`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phoneNumber: formData.number }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.status === "success") {
        setVerificationStatus("success");
      } else if (data.message === "User is already registered") {
        setVerificationStatus("failed");
      } else {
        setErrorMessage("invalid number");
        // Handle error, e.g., show error message
        console.log("Error:", data.message);
      }
      setIsLoading(false);
    } else if (verificationStatus === "success") {
      // Handle OTP submission or other logic
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/check-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneNumber: formData.number,
            otp: formData.otp,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      alert(data.message);

      setIsLoading(false);

      if (data.status === "success") {
        setIsSignUpForm(true);
      }
    } else if (verificationStatus === "failed") {
      setIsLoading(true);
      console.log("Password:", formData.password);
      signin(formData.number, formData.password);
    }
  };

  // console.log(passError);

  // signup form functions

  const [formData2, setFormData2] = useState({
    // mobile: "",
    fullName: "",
    // email: "",
    password: "",
    // role: "",
    grade: "",
  });
  const [errors2, setErrors2] = useState({});

  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setFormData2({ ...formData2, [name]: value });
    // console.log(formData2)
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Example API call for signup
      console.log(formData2);
      // if(loading) return <Spinner/> ;
      signup({ ...formData2, phoneNumber: formData.number });
      setIsLoading(false);
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <section className="h-full  p-10 max-w-screen-sm mx-auto lg:mt-36 max-md:mt-32 max-sm:mt-6">
      <div dir="rtl" className="mx-auto h-auto">
        {isSignUpForm ? (
          <form
            onSubmit={handleSubmit2}
            className=" border-gray-500 rounded-3xl border-[2px] px-5 py-5 md:p-5 sm:p-16"
          >
            <div className="w-[70%] mx-auto">
              <h1 className="text-[#E67D4B] text-[25px] max-md:text-[20px] max-sm:text-[16px] font-bold text-center">
                Student's Entrance to Filimo School
              </h1>
              {/* <div className="bg-[#F4BD50] w-[10%] h-2 border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div> */}
            </div>
            <p className="text-center mt-4 text-[14px] md:text-[16px] text-gray-700">
              Enter your details to register/login:
            </p>

            <div className="text-center mt-8">
              <input
                name="fullName"
                className="border-[#E67D4B] border-[1px] rounded-lg px-4 py-2 focus:outline-none w-[95%] sm:w-[40%] md:w-[44%] mx-3 max-sm:text-sm max-sm:px-2 mb-4"
                placeholder="Full Name"
                type="text"
                value={formData2.fullName}
                onChange={handleInputChange2}
              />
              {errors2.fullName && (
                <p className="text-red-500">{errors2.fullName}</p>
              )}
              <input
                name="password"
                className="border-[#E67D4B] border-[1px] rounded-lg px-4 py-2 focus:outline-none w-[95%] sm:w-[40%] md:w-[44%] mx-3 max-sm:text-sm max-sm:px-2 mb-4"
                placeholder="Password"
                type="password"
                value={formData2.password}
                onChange={handleInputChange2}
              />
              {errors2.password && (
                <p className="text-red-500">{errors2.password}</p>
              )}
              <select
                required
                name="grade"
                value={formData2.grade}
                onChange={handleInputChange2}
                className="border-[#E67D4B] border-[1px] rounded-lg px-4 py-2 focus:outline-none w-[95%] sm:w-[40%] md:w-[44%] mx-3 max-sm:text-sm max-sm:px-2 mb-4"
              >
                <option value="" disabled>
                  Select Grade
                </option>
                <option value="preschool">Preschool</option>
                <option value="first">First Grade</option>
                <option value="second">Second Grade</option>
                <option value="third">Third Grade</option>
                <option value="fourth">Fourth Grade</option>
                <option value="fifth">Fifth Grade</option>
                <option value="sixth">Sixth Grade</option>
                <option value="seventh">Seventh Grade</option>
                <option value="eighth">Eighth Grade</option>
                <option value="ninth">Ninth Grade</option>
              </select>
              {errors2.grade && <p className="text-red-500">{errors2.grade}</p>}

              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="px-4 py-3 rounded-full bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white"
                >
                  {isLoading ? "Loading..." : "Submit"}
                </button>
              </div>
            </div>
            <p className="flex items-center justify-center gap-3 mt-5">
              Already have an account ?{" "}
              <Link href="/signin" className="text-[#E67D4B] font-bold">
                {" "}
                Sign In
              </Link>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="w-full">
            {/* md:w-[120%] */}
            <div className="">
              <span>
                <Link href={"/"}>
                  <FaAngleRight size={40} color="#999" />
                </Link>
              </span>
              <h1 className="font-bold text-gray-700 text-xl">
                Student's Entrance to Filimo School
              </h1>
            </div>
            <p className="mt-5 text-[16px] text-gray-600">
              Enter your details to register/login:
            </p>

            <div className="mt-5 w-full">
              <div className="flex justify-start w-full">
                {verificationStatus === null && (
                  <div className="flex flex-col mt-2 mb-2 justify-start w-full">
                    <div className="relative w-full">
                      <label className="absolute top-[-8px] text-xs right-6  bg-white text-gray-500 px-1">
                        Your mobile number
                      </label>
                      <input
                        dir="rtl"
                        onChange={handlePhoneInputChange}
                        defaultValue={formData.number}
                        required
                        type="number"
                        className="w-full px-4 py-4 max-sm:py-2 shadow-lg rounded-md border-2 border-gray-300 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      {errorMessage && (
                        <p className="text-red-500 text-sm mt-1">
                          {errorMessage}
                        </p>
                      )}
                    </div>
                    {/* <PhoneInput
                      defaultCountry="IQ"
                      value={formData.number}
                      onChange={handlePhoneInputChange}
                      required
                      className="w-full px-4 py-2 shadow-lg rounded-md border-2 border-gray-300 "
                    /> */}
                    {errors.number && (
                      <p className="text-red-500">{errors.number}</p>
                    )}
                  </div>
                )}

                {verificationStatus === "success" && (
                  <div className="flex flex-col justify-start w-full">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={formData.otp}
                      onChange={handleOtpChange}
                      className="w-full px-4 py-2 shadow-lg rounded-md border-2 border-gray-300 focus:outline-none"
                    />
                    {errors.otp && <p className="text-red-500">{errors.otp}</p>}
                  </div>
                )}

                {verificationStatus === "failed" && (
                  <div className="flex flex-col justify-start w-full ">
                    <p>
                      Enter your password to log in with the number{" "}
                      {phoneNumber}
                    </p>
                    <div className="flex justify-between items-center mt-4 relative">
                      <label className="absolute top-[-8px] text-sm right-2 bg-white text-gray-500 px-1">
                        Password
                      </label>
                      <input
                        type={isPasswordVisible ? "text" : "password"}
                        value={formData.password}
                        onChange={handlePasswordChange}
                        className={`w-full px-4 py-4 max-sm:py-2 shadow-lg rounded-md border-2 border-gray-300 focus:outline-none transition-all ${
                          passwordError ? "border-red-500" : ""
                        }`}
                      />
                      <div
                        className="absolute left-2 cursor-pointer text-xl"
                        onClick={togglePasswordVisibility}
                      >
                        {!isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                      </div>
                    </div>

                    <p
                      className={`${
                        passwordError ? "opacity-100  mt-2" : ""
                      } text-red-500 opacity-0 transition-all mt-0`}
                    >
                      Password is incorrect
                    </p>
                    <div className="py-2 mt-2">
                      <p className="flex items-center gap-2 text-gray-500 cursor-pointer hover:text-gray-700">
                        <span className="text-xl">
                          <LuMessageSquare />
                        </span>
                        <p className="text-sm">Login with one time password</p>
                      </p>
                      <Link
                        href="/forget-password"
                        className="flex items-center gap-2 text-gray-500 cursor-pointer hover:text-gray-700 mt-2"
                      >
                        <span className="text-xl">
                          <MdOutlineLock />
                        </span>
                        <p className="text-sm">Forget password</p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="py-3 bg-[#F4BD50] rounded-lg font-bold text-gray-700 w-full"
                >
                  {isLoading ? "Loading..." : "The next step"}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Page;
