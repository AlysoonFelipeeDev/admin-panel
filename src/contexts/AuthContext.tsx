import { createContext, useContext, useState, type ReactNode } from "react";
import type { userContextType } from "../types/userContextType";
import { useMutation } from "@tanstack/react-query";
import { usersService } from "../services/users";
import type { LoginCredentials, User } from "../types/user";


export const AuthContext = createContext(
    {} as userContextType
)

type AuthProviderProps = {
    children: ReactNode
}

export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<User | null>(null)

    const loginMutation = useMutation({
        mutationFn: usersService.login,
        onSuccess: (data) => {
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
            setUser(data.user)
        }
    })

    const signIn = (credentials: LoginCredentials) => loginMutation.mutate(credentials)


    return (
        <AuthContext.Provider value={{user, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useUser(){
    return useContext(AuthContext)
}