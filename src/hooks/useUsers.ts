import { useQuery } from "@tanstack/react-query";
import { usersService } from "../services/users";

export function useUsers() {

    const query = useQuery({
        queryKey: ['users'],
        queryFn: () => usersService.getUsers()
    })

    return {
        users: query.data ?? [],
        isLoading: query.isLoading,
        isError: query.isError
    }
}