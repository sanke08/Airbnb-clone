import { z } from "zod"

export const registerValidator = z.object({
    email: z.string({ required_error: "Email is required" }),
    name: z.string({ required_error: "Name is required" }),
    password: z.string({ required_error: "Password is required" }),
})
export type registerRequest = z.infer<typeof registerValidator>