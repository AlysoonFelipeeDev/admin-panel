import { createContext, useContext, useState, type ReactNode } from "react";
import type { userContextType } from "../types/userContextType";
import { useMutation } from "@tanstack/react-query";
import { usersService } from "../services/users";
import type { LoginCredentials, User } from "../types/user";
import { useNavigate } from "react-router-dom";



export const AuthContext = createContext(
    {} as userContextType
)

type AuthProviderProps = {
    children: ReactNode
}

export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<User | null>(null)
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

    const signIn = (credentials: LoginCredentials) => loginMutation.mutate(credentials)
    const logingIn = loginMutation.isPending


    return (
        <AuthContext.Provider value={{user, signIn, logingIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useUser(){
    return useContext(AuthContext)
}