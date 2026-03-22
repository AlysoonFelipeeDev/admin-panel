import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { userContextType } from "../types/userContextType";
import { useMutation } from "@tanstack/react-query";
import { usersService } from "../services/users";
import type { LoginCredentials, User } from "../types/user";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/api";



export const AuthContext = createContext(
    {} as userContextType
)

type AuthProviderProps = {
    children: ReactNode
}

export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    const loginMutation = useMutation({
        mutationFn: usersService.login,
        onSuccess: (data) => {
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
            setUser(data.user)
            navigate('/')
        }
    })

    useEffect(() => {
        setLoading(true)
        const storageUser = localStorage.getItem('user')
        const storageToken = localStorage.getItem('token')

        if(storageUser && storageToken){
            try {
                setUser(JSON.parse(storageUser))
                api.defaults.headers.Authorization =  `Bearer ${storageToken}`
            } catch (error) {
                navigate('/login')
            }
        }
        setLoading(false)
    }, [])

    const signIn = (credentials: LoginCredentials) => loginMutation.mutate(credentials)
    const logingIn = loginMutation.isPending


    return (
        <AuthContext.Provider value={{user, signIn, logingIn, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useUser(){
    return useContext(AuthContext)
}