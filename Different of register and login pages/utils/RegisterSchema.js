import {z} from "zod";

export const registerSchema = z.object({
    name: z.string().min(3, "Please enter your first name"),
    email: z.string().min(3, "Email is required").email({ message: "Please Enter a valid email" }),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });