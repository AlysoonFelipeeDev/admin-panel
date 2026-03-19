import z from "zod";

export const loginSchema= z.object({
    email: z.string().email().min(1, "Email é obrigatório e/ou insira um email válido"),
    password: z.string().min(6, "Senha é obrigatória")
})