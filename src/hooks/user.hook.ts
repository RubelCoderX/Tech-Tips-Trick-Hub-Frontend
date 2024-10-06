import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  deleteUser,
  getAllUsers,
  toggleFollow,
  updateStatusUser,
} from "../services/UserServices/indext";

export const useToggleFollow = () => {
  return useMutation({
    mutationKey: ["follower"],
    mutationFn: async (followingId: string) => await toggleFollow(followingId),

    onError: () => {
      toast.error("Failed to perform action. Please try again later.");
    },
  });
};

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => await getAllUsers(),
  });
};

export const useDeletedUser = () => {
  return useMutation({
    mutationKey: ["delete-user"],
    mutationFn: async (id: string) => await deleteUser(id),
    onSuccess: () => {
      toast.success("User deleted successfully.");
    },
    onError: () => {
      toast.error("Failed to delete user. Please try again later.");
    },
  });
};

export const useUpdateStatusUser = () => {
  return useMutation({
    mutationKey: ["manage-status"],
    mutationFn: async (id: string) => await updateStatusUser(id),
    onSuccess: () => {
      toast.success("User status updated successfully.");
    },
    onError: () => {
      toast.error("Failed to update user status. Please try again later.");
    },
  });
};
