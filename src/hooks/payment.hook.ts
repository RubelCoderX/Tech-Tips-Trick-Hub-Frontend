import { useMutation } from "@tanstack/react-query";

import { paymentMethod } from "../services/PaymentServices";
import { toast } from "sonner";

interface PaymentData {
  user: string | undefined;
  price: string;
  title: string;
  expiry: string;
}

export const usePayment = () => {
  return useMutation({
    mutationKey: ["payment"],
    mutationFn: async (data) => {
      return await paymentMethod(data);
    },
    onSuccess: (data) => {
      if (data?.success) {
        window.location.href = data?.data?.payment_url;
      }
    },
    onError: () => {
      toast.error("Failed to process payment!");
    },
  });
};
