import styled from "styled-components"

interface EditProfileProps {
    name: string,
    email: string,
    data: string
}
export function EditProfile({name, email, data}: EditProfileProps){
    return (
        <>
            <ProfileUser>
                <div>
                    <h1>{name}</h1>
                    <p>Email: {email}</p>
                    <p>Início: {data}</p>
                </div>
                <button>Editar</button>
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
    button {
        cursor: pointer;
        border-radius: 10px;
        border: none;
        background-color: #2D425F;
        color: #FFF;
    }
`