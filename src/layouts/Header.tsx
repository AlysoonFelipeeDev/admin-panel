import { Bell, CircleUser, Menu } from "lucide-react"
import styled from "styled-components"

export function Header(){
    return (
        <>
            <div><Menu/></div>
            <Grouped>
                <div><Bell/></div>
                <div><CircleUser/></div>
                <div>Admin</div>
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