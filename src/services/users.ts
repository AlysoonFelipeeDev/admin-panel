import type { User } from "../types/user"
import { api } from "../lib/api"

export const usersService = {
    async getUsers(): Promise<User[]> {
        const response = await api.get<User[]>('/users')
        return response.data
    }
}