import { Bell, CircleUser, Menu } from "lucide-react"
import styled from "styled-components"
import { useUser } from "../contexts/AuthContext"

export function Header(){
    const {user} = useUser()
    return (
        <>
            <div><Menu/></div>
            <Grouped>
                <div><Bell/></div>
                <div><CircleUser/></div>
                <div>{user?.role === 'admin' ? "Administrador(a)" : "Membro(a)"}</div>
            </Grouped>
        </>
    )
}

const Grouped = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-around;
    align-items: center;
`