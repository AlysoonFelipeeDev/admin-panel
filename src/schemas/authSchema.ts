import z from "zod";

export const loginSchema= z.object({
    email: z.string().email().min(1, "Email é obrigatório e/ou insira um email válido").trim(),
    password: z.string().min(6, "Senha é obrigatória").trim()
})

export type AuthFormData = z.infer<typeof loginSchema>