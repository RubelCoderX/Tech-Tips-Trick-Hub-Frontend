import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { toggleFollow } from "../services/UserServices/indext";

export const useToggleFollow = () => {
  return useMutation({
    mutationKey: ["follower"],
    mutationFn: async (followingId: string) => await toggleFollow(followingId),
    // onSuccess: () => {
    //   toast.success("Follow Action successful!", { position: "top-center" });
    // },
    onError: () => {
      toast.error("Failed to perform action. Please try again later.");
    },
  });
};
