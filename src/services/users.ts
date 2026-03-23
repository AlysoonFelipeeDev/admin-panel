import type { AuthUser, LoginCredentials, User } from "../types/user"
import { api } from "../lib/api"

export const usersService = {
    async getUsers(): Promise<User[]> {
        const response = await api.get<User[]>('/users')
        return response.data
    },

    async login(credentials: LoginCredentials): Promise<AuthUser>{
        const response = await api.post<AuthUser>('/login', credentials)
        return response.data
    },

    async createUser(user: Omit<User, 'id'>): Promise<User> {
        const response = await api.post<User>('/register', user)
        return response.data
    },

    async updateUser({id, user}: {id: string, user: User}): Promise<User> {
        const response = await api.put(`/users/${id}`, {user})
        return response.data
    },

    async deleteUser(id: string | number) {
        await api.delete(`/users/${id}`)
    }
}