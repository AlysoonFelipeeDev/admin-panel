import { useUsers } from "../hooks/useUsers";

export function UsersList() {
    const { users, isLoading, isError  } = useUsers()

    if(isLoading) return <div>Carregando...</div>
    if(isError) return <div>Algo deu errado!</div>

    return (
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    )
}