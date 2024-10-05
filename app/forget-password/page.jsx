"use client";
import { useState } from "react";
import PhoneInput from 'react-phone-number-input';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import 'react-phone-number-input/style.css';
import { useRouter } from "next/navigation";
import { useUserAuth } from "@/context/AuthContext";
import Link from "next/link";

const Page = () => {
  const { signup, signin } = useUserAuth();
  const router = useRouter();
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [isLoading , setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    number: "",
    otp: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const [verificationStatus, setVerificationStatus] = useState(null); // null, 'success', or 'failed'
  const [errorMessage, setErrorMessage] = useState('');
  const handlePhoneInputChange = (value) => {
    const valueInput = value.target.value;

    // Check if the input starts with "+92"
    if (valueInput.startsWith('964')) {
      setErrorMessage('Please enter the number without the country code.');
    }
    // Check if the input starts with "0"
    else if (valueInput.startsWith('0')) {
      setErrorMessage('Please remove the leading 0.');
    } else {
      setErrorMessage('');
      // setPhoneNumber(`+92${valueInput}`);
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

    if (verificationStatus === 'success') {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    
    // const formErrors = validateForm();

    // if (Object.keys(formErrors).length > 0) {
    //   setErrors(formErrors);
    //   return;
    // }

    if (verificationStatus === null) {
      // Send phone number to server
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber: formData.number }),
      });
      const data = await response.json();
      console.log(data);
      setIsLoading(false)

      if (data.status === 'success') {
        setVerificationStatus('success');
      } else {
        setVerificationStatus('fail');
        // Handle error, e.g., show error message
        console.log("Error:", data.message);
      }
    } else if (verificationStatus === 'success') {
      // Handle OTP submission or other logic
      setIsLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/reset-password`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber: formData.number, otp: formData.otp, newPassword: formData.password }),
      });
      const data = await response.json();
      console.log(data);
      setIsLoading(false)
      alert(data.message)

      if (data.status === "success") { 
        setIsSignUpForm(false);
        router.push('/signin')
      }
    } else if (verificationStatus === 'fail') {
      // Handle password submission or other logic
      console.log("Password:", formData.password);
      signin(formData.number, formData.password);
    }
  };

  const [formData2, setFormData2] = useState({
    fullName: "",
    password: "",
    grade: "",
  });
  const [errors2, setErrors2] = useState({});

  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setFormData2({ ...formData2, [name]: value });
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    try {
      console.log(formData2);
      signup({ ...formData2, phoneNumber: formData.number });
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  };

  return (
    <section className="h-screen flex items-center px-4">
      <div className="w-[1010px] mx-auto h-auto">
        {isSignUpForm ? (
          <form
            onSubmit={handleSubmit2}
            className="border-gray-500 rounded-3xl border-[2px] px-5 py-5 md:p-5 sm:p-16"
          >
            <div className="w-[70%] mx-auto">
              <h1 className="text-[#E67D4B] text-[25px] max-md:text-[20px] max-sm:text-[16px] font-bold text-center">
                Student's Entrance to Filimo School
              </h1>
            </div>
            <p className="text-center mt-4 text-[14px] md:text-[16px] text-gray-700">
              Enter your Phone number to recieve OTP:
            </p>
            <div className="text-center mt-8">
              <input
                name="password"
                className="border-[#E67D4B] border-[1px] rounded-lg px-4 py-2 focus:outline-none w-[95%] sm:w-[40%] md:w-[44%] mx-3 max-sm:text-sm max-sm:px-2 mb-4"
                placeholder="New Password"
                type="password"
                value={formData2.password}
                onChange={handleInputChange2}
              />
              {errors2.password && (
                <p className="text-red-500">{errors2.password}</p>
              )}
              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="px-4 py-3 rounded-full bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white"
                >
                 {isLoading ? 'Loading...' : 'Next Level'}
                </button>
              </div>
            </div>
          </form>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="border-[#a7a7a7] rounded-3xl border-[3px] py-5 sm:py-5 lg:py-8 xl:py-12 px-5 sm:px-8 lg:px-5 xl:px-20 shadow-2xl"
          >
            <div className="w-[80%] mx-auto">
              <h1 className="text-[#E67D4B] text-[34px] max-md:text-[20px] font-bold text-center w-full">
                Student's Entrance to Filimo School
              </h1>
              <div className="bg-[#F4BD50] w-[94%] h-2 mx-auto border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
            </div>
            <p className="text-center mt-8 text-[16px]">
            Enter your Phone number to recieve OTP:
            </p>
            <div className="text-center gap-10 mt-8">
              <div className="flex justify-center gap-5">
                {(verificationStatus === null || verificationStatus === 'failed') && (
                  <div className="flex flex-col items-center justify-center p-4 max-w-sm mx-auto">
                     <div className="relative w-full">
                     <label className="absolute top-[-8px] text-sm left-2 bg-white text-gray-500 px-1">
                        Your mobile number
                      </label>
                    {/* <PhoneInput
                      defaultCountry="PK"
                      value={formData.number}
                      onChange={handlePhoneInputChange}
                      required
                      className="w-full px-4 py-2 shadow-lg rounded-md bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] outline-none"
                    /> */}
                    <input
                        onChange={handlePhoneInputChange}
                        defaultValue={formData.number}
                        required
                        type="number"
                        className="w-full px-4 py-2 max-sm:py-2  shadow-lg rounded-md border-2 border-gray-300 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                    {errorMessage && (
                        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
                      )}
                    </div>
                  </div>
                )}
                {(verificationStatus === 'success') && (
                  <div className="flex flex-col items-center justify-center p-4 max-w-sm mx-auto">
                    {verificationStatus === 'success' && (
                      <>
                       <div className="relative w-full ">
                       <label className="absolute top-[-8px]  text-sm left-6 bg-white text-gray-500 px-1">
                        Enter OTP
                      </label>
                        <input
                          type="text"
                          value={formData.otp}
                          onChange={handleOtpChange}
                          className="rounded-md border-2 border-gray-300 w-full px-4 py-2 focus:outline-none  mx-3 max-sm:text-sm max-sm:px-2 mb-4"
                        />
                        {errors.otp && <p className="text-red-500">{errors.otp}</p>}
                        </div>
                      </>
                    )}
                    {verificationStatus === 'success' && (
                      <>
                      <div className="relative w-full ">
                      <label className="absolute top-[-8px]  text-sm left-6 bg-white text-gray-500 px-1">
                        New Password
                      </label>
                        <input
                          type="password"
                          value={formData.password}
                          onChange={handlePasswordChange}
                          className="rounded-md border-2 border-gray-300 w-full px-4 py-2 focus:outline-none  mx-3 max-sm:text-sm max-sm:px-2 mb-4"
                        />
                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white"
                >
                   {isLoading ? 'Loading...' : 'Submit'}
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