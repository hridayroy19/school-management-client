import z from "zod";

export const subjectValidationSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name must not exceed 50 characters" }),

  code: z.string()
    .min(2, { message: "Code must be at least 2 characters long" })
    .max(10, { message: "Code must not exceed 10 characters" }),

  fullMarks: z.number()
    .min(1, { message: "Full marks must be greater than 0" }),

  passMarks: z.number()
    .min(0, { message: "Pass marks cannot be negative" }),
});
