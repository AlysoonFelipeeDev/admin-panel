import styled from "styled-components"
import { Button } from "./Button"
import { useUser } from "../../contexts/AuthContext"

interface EditProfileProps {
    name: string,
    email: string,
    data: string
}
export function EditProfile({data}: EditProfileProps){
    const {user} = useUser()
    return (
        <>
            <ProfileUser>
                <div>
                    <h1>{user?.name}</h1>
                    <p>Email: {user?.email}</p>
                    <p>Início: {data}</p>
                </div>
                <Button>Editar</Button>
            </ProfileUser>
        </>
    )
}

const ProfileUser = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
    h1 {
        margin-bottom: 20px;
        font-size: 1.5em;
    } 
`