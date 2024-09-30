"use client";

import Link from "next/link";
import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { zodResolver } from "@hookform/resolvers/zod";

import TechForm from "@/src/components/form/TechForm";
import { TechInput } from "@/src/components/form/TechInput";
import { loginValidationSchema } from "@/src/components/schema/login.schema";
import TechSelect from "@/src/components/form/TechSelect";
import TechDatePicker from "@/src/components/form/TechDatePicker";

const RegisterPage = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const genderOptions = [
    { key: "select-gender", label: "Select Gender" },
    { key: "male", label: "Male" },
    { key: "female", label: "Female" },
    { key: "other", label: "Other" },
  ];

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="py-12">
      <div className="bg-[#F9F9F9] dark:bg-[#1A1A1A] p-7">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-semibold text-center md:text-left">
            My Account
          </h1>
        </div>
      </div>
      <div className="mt-8 md:mt-16 w-full max-w-lg mx-auto text-center">
        <h2 className="mb-3 text-2xl font-semibold">Please Register</h2>
        <p className="mb-6 text-lg">
          {" "}
          If you already have an account, please log in to continue.
        </p>
      </div>

      <div className="flex border flex-col items-center justify-center w-full max-w-lg bg-[#F9F9F9] dark:bg-[#1A1A1A] mx-auto mt-5 p-6 mb-10 ">
        <TechForm
          resolver={zodResolver(loginValidationSchema)}
          onSubmit={onSubmit}
        >
          <div className="mb-4 md:w-[400px]">
            <TechInput
              label="Email"
              name="email"
              size="lg"
              type="email"
              variant="bordered"
              radius="none"
            />
          </div>

          <div className="mb-4 md:w-[400px]">
            <TechInput
              endContent={
                <button
                  aria-label="toggle password visibility"
                  className="focus:outline-none "
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <AiFillEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <AiFillEye className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              label="Password"
              name="password"
              size="lg"
              type={isVisible ? "text" : "password"}
              variant="bordered"
              radius="none"
            />
          </div>
          <div className="mb-4 md:w-[400px]">
            <TechSelect
              label="Gneder"
              name="gender"
              size="lg"
              type="select"
              variant="bordered"
              radius="none"
              options={genderOptions}
            />
          </div>
          <div className="mb-4 md:w-[400px]">
            <TechDatePicker
              radius="none"
              label="Date OF Birth"
              name="birthDate"
            />
          </div>
          <div className="mb-4 md:w-[400px]">
            <TechInput
              label="Address"
              name="address"
              size="lg"
              type="text"
              variant="bordered"
              radius="none"
            />
          </div>
          <div className="mb-4 md:w-[400px]">
            <label
              className="flex h-14 w-full cursor-pointer items-center justify-center  border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
              htmlFor="image"
            >
              Upload image
            </label>
            <input
              className="hidden"
              id="image"
              type="file"
              // onChange={(e) => handleImageChange(e)}
            />
          </div>
          <button
            className="w-full py-2 text-white mt-4 bg-red-500 font-semibold"
            type="submit"
          >
            Register
          </button>
        </TechForm>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Already have an account?
            <Link className="text-red-700 hover:underline ml-1" href="/login">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
