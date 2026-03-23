import z from "zod";

export const loginSchema= z.object({
    email: z.string().email("Coloque em formato de email ( email@emai.com)").min(1, "Email é obrigatório e/ou insira um email válido").trim(),
    password: z.string().min(6, "Senha é obrigatória").trim()
})

export const registerSchema= loginSchema.extend({
    name: z.string().min(3, 'Nome tem que ter no minimo 3 caracteres'),
    role: z.enum( ["admin", "member"])
})

export const updateUserSchema = z.object({
    name: z.string().min(3, 'Nome tem que ter no minimo 3 caracteres'),
    email: z.string().email("Coloque em formato de email ( email@emai.com)").min(1, "Email é obrigatório e/ou insira um email válido").trim(),
    role: z.enum( ["admin", "member"])
})

export type AuthFormData = z.infer<typeof loginSchema>
export type RegisterFormData = z.infer<typeof registerSchema>
export type EditProfileData = z.infer<typeof updateUserSchema>