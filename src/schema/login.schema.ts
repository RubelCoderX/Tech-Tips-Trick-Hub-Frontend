import { z } from "zod";

export const RegisterValidationSchema = z.object({
  name: z.string().trim().min(3, "Name must be at least 3 characters"),
  gender: z.string().trim().min(3, "Gender is required"),
  // address: z.string().trim().min(10, "Address is required"),
  email: z.string().trim().email("Please enter a valid email"),
  password: z.string().trim().min(6, "Password must be at least 6 characters"),
  birthDate: z.string().trim().min(3, "Birth date is required"),
  profileImage: z.string().url("Please enter a valid URL"),
});
export const loginValidationSchema = z.object({
  email: z.string().trim().email("Please enter a valid email"),
  password: z.string().trim().min(6, "Password must be at least 6 characters"),
});
