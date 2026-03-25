import styled from "styled-components"
import { Button } from "./Button"

interface EditProfileProps {
    name: string,
    email: string,
    data: string,
    onEdit: () => void
}
export function EditProfile({name, email, data, onEdit}: EditProfileProps){
    return (
        <>
            <ProfileUser>
                <div>
                    <h1>{name}</h1>
                    <p>Email: {email}</p>
                    <p>Início: {data}</p>
                </div>
                <Button onClick={onEdit}>Editar</Button>
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