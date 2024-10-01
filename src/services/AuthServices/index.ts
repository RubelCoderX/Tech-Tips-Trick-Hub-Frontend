"use server";

import { FieldValues } from "react-hook-form";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

import axiosInstance from "@/src/lib/AxiosInstence";

export const createUser = async (userData: FieldValues) => {
  try {
    const res = await axiosInstance.post("/user/create-user", userData);

    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// login user
export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/sign-in", userData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// logout user
export const logOut = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    return {
      id: decodedToken.id,
      email: decodedToken.email,
      role: decodedToken.role,
      profileImage: decodedToken.profileImage,
    };
  }

  return decodedToken;
};
