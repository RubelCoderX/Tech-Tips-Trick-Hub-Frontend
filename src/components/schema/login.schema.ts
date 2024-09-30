import { z } from "zod";

export const RegisterValidationSchema = z.object({
  name: z.string().trim().min(3, "Name must be at least 3 characters"),
  mobileNumber: z
    .string()
    .trim()
    .min(10, "Mobile number must be at least 10 characters"),
  email: z.string().trim().email("Please enter a valid email"),
  password: z.string().trim().min(6, "Password must be at least 6 characters"),
});
export const loginValidationSchema = z.object({
  email: z.string().trim().email("Please enter a valid email"),
  password: z.string().trim().min(6, "Password must be at least 6 characters"),
});
