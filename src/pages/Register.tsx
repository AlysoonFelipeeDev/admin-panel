import styled from "styled-components"
import { useUsers } from "../hooks/useUsers"
import { useForm } from "react-hook-form"
import { registerSchema, type RegisterFormData } from "../schemas/authSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import type { User } from "../types/user"
import { useNavigate } from "react-router-dom"

export function Register(){
    const {createUser, isCreating} = useUsers()
    const navigate = useNavigate()
    const {
        register, 
        handleSubmit,
        formState: {errors}
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema)
    })

    const handleSave = (user: Omit<User, 'id'>) => {
        createUser(user)
        navigate('/login')
    }

    return (
        <Container>
            <ContainerForm>
                <h1>Faça seu Cadastro:</h1>
                <Form onSubmit={handleSubmit(handleSave)}>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input 
                        type="text" 
                        id="name"
                        {...register('name')}
                        disabled={isCreating}
                        />
                        {errors.name && <span>{errors.name.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="name">Email:</label>
                        <input 
                        type="email" 
                        id="email" 
                        {...register('email')}
                        disabled={isCreating}
                        />
                        {errors.email && <span>{errors.email.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="password">Senha:</label>
                        <input 
                        type="password" 
                        id="password"
                        {...register('password')}
                        disabled={isCreating}
                        />
                        {errors.password && <span>{errors.password.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="role">Função:</label>
                        <select 
                        id="role"
                        {... register('role')}
                        disabled={isCreating}
                        >
                            <option value="admin">Administrador(a)</option>
                            <option value="member">Membro(a)</option>
                        </select>
                    </div>
                    <ButtonLogin><button type="submit">{isCreating ? "Cadastrando..." : "Cadastrar"}</button></ButtonLogin>
                </Form>
                <Login>
                    <p>Já tem cadastro?<button>Clique aqui!</button></p>
                </Login>
            </ContainerForm>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #375b8a;
    width: 100%;
    height: 100vh;
`
const ContainerForm = styled.div`
    border-radius: 20px;
    background-color: #ffffff;
    box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 50px;
    h1{
        text-align: center;
    }
    
`
const Form = styled.form`
    margin-top: 20px;
    width: 500px;
    div {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    input {
        padding: 10px;
        border-radius: 5px;
    }
`

const ButtonLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        padding: 5px 100px;
        cursor: pointer;
    }
`

const Login= styled.div`
    p {
        text-align: center;
    }
    button{
        margin-left:5px;
        border: none;
        background-color: transparent;
        text-decoration: underline;
        cursor: pointer;
        color: #375b8a;
    }
`