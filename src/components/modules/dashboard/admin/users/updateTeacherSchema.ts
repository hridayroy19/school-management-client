import { z } from "zod";

export const teacherFormSchema = z.object({
  subjects: z
    .array(z.string().min(1, { message: "Subject cannot be empty" }))
    .nonempty({ message: "At least one subject is required" }),
  
  assignedClasses: z
    .array(z.string().min(1, { message: "Class ID cannot be empty" }))
    .nonempty({ message: "At least one class must be assigned" }),
  
  contactPhone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number must be at most 15 digits" })
    .regex(/^[0-9]+$/, { message: "Phone number must contain only digits" }),
  
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters" }),
  
  joinDate: z
    .string()
    .refine(
      (date) => !isNaN(Date.parse(date)),
      { message: "Join date must be a valid date" }
    ),
});
