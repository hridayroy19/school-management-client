import z from "zod";

export const registrationSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Name must be between 2 and 50 characters" })
        .max(50, { message: "Name must be between 2 and 50 characters" }),
    email: z
        .string()
        .email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(6, { message: "Password must be at least 8 characters" }),
});
