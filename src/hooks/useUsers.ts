import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { usersService } from "../services/users";
import type { User } from "../types/user";


export function useUsers() {
    const queryClient = useQueryClient()

    const query = useQuery({
        queryKey: ['users'],
        queryFn: () => usersService.getUsers()
    })

    const createMutation = useMutation({
        mutationFn: usersService.createUser,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['users']})

        }
    })

    const deleteMutation = useMutation({
        mutationFn: usersService.deleteUser,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['users']})
        }
    })

    return {
        users: query.data ?? [],
        isLoading: query.isLoading,
        isError: query.isError,
        createUser: (user: Omit<User, 'id'>) => createMutation.mutate(user),
        isCreating: createMutation.isPending,
        deleteUser: (id: string | number) => deleteMutation.mutate(id)
    }
}