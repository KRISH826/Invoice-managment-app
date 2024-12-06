import {z} from "zod";

export const onBoardingSchema = z.object({
    firstName: z.string().min(2, "First Name is required").max(50, "First Name must be less than 50 characters"),
    lastName: z.string().min(2, "Last Name is required").max(50, "Last Name must be less than 50 characters"), 
    address: z.string().min(2, "Address is required").max(50, "Address must be less than 50 characters"),
})