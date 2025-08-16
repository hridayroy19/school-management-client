import z from "zod";

export const ClassSchema = z.object({
    name: z.string(),
    section: z.string(),
    session: z.string()
});
