import styled from "styled-components"
import { Button } from "./Ui/Button"
import { useForm } from "react-hook-form"
import { updateUserSchema, type EditProfileData } from "../schemas/authSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useUsers } from "../hooks/useUsers"
import { useUser } from "../contexts/AuthContext"
import { useEffect } from "react"
import type { User } from "../types/user"

export function EditFormUser(){
    const { editUser } = useUsers()
    const {user} = useUser()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<EditProfileData>({
        resolver: zodResolver(updateUserSchema)
    })
    
    useEffect(() => {
        if(user) {
            reset({
                name: user.name,
                email: user.email,
                role: user.role
            })
        }
    }, [user, reset])

    const onSubmit = (data: EditProfileData) => {
        if(!user?.id) return
        editUser({
            id: user.id, 
            user: {...user, ...data } as User
        })
    }

    
    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    id="name"
                    {...register('name')}
                    />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div>
                    <label htmlFor="email"> Email:</label>
                    <input 
                    type="email" 
                    id="email" 
                    {...register('email')}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <label htmlFor="role">Função</label>
                    <select 
                    id="role"
                    {...register('role')}
                    >
                        <option value="admin">Administrador(a)</option>
                        <option value="memeber">Membro(a)</option>
                    </select>
                    {errors.role && <span>{errors.role.message}</span>}
                </div>
                <Button type="submit">Atualizar</Button>
            </Form>
        </>
    )
}



const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 280px;
    label {
        display: flex;
    }
    input {
        margin-bottom: 20px;
        width: 100%;
        border-radius: 10px;
        padding: 8px;
        box-sizing: border-box;
    }
    select {
        margin-bottom: 20px;
    }
`
