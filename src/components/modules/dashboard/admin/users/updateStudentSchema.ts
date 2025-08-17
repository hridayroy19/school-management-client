import z from "zod";

export const updateStudentSchema = z.object({

  rollNumber: z
    .string(),

  classId: z
    .string()
    .min(1, { message: "Class ID is required" }),

  guardianName: z
    .string()
    .min(2, { message: "Guardian name must be at least 2 characters" }),

  guardianPhone: z
    .string()
    .regex(/^\+880[0-9]{9,10}$/, { message: "Add Bangladeshi (+088) Code phone number" }),

  contactPhone: z
    .string()
    .regex(/^\+880[0-9]{9,10}$/, { message: "Add Bangladeshi (+088) Code phone number" }),

  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters" }),

  enrollmentYear: z
    .string()
    .refine(
      (val) => /^\d{4}-\d{2}-\d{2}$/.test(val), 
      { message: "Invalid date format (YYYY-MM-DD required)" }
    ),
});
