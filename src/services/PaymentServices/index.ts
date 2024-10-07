"use server";
import axiosInstance from "@/src/lib/AxiosInstence";

interface PaymentData {
  user: string | undefined;
  price: string;
  title: string;
  expiry: string;
}

export const paymentMethod = async (data: PaymentData) => {
  try {
    const response = await axiosInstance.post(`/payment/create-payment`, data);

    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
