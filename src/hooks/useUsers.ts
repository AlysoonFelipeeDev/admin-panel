import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { usersService } from "../services/users";
import type { User } from "../types/user";
import { useUser } from "../contexts/AuthContext";



export function useUsers() {
    const queryClient = useQueryClient()
    const {setUser} = useUser()

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
        }, 
        onError: (error) => {
            console.log('Erro ao deltar', error)
        }
    })

    const editMutation = useMutation({
        mutationFn: usersService.updateUser,
        onSuccess: (data) => {
            setUser(data)
            queryClient.invalidateQueries({queryKey: ['users']})
        }
    })

    return {
        users: query.data ?? [],
        isLoading: query.isLoading,
        isError: query.isError,
        createUser: (user: Omit<User, 'id'>) => createMutation.mutate(user),
        isCreating: createMutation.isPending,
        deleteUser: (id: string | number) => deleteMutation.mutate(id),
        editUser: ({id, user}: {id: string | number, user: User}) => editMutation.mutate({id, user})
    }
}