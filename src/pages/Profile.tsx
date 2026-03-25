import styled from "styled-components"
import { PageHeader } from "../components/Ui/PageHeader"
import { EditProfile } from "../components/Ui/EditProfile"
import { useUser } from "../contexts/AuthContext"
import { EditFormUser } from "../components/EditFormUser"
import { useState } from "react"

interface ContainerEditProps {
    modal: boolean
}

export function Profile(){
    const {user} = useUser()
    const [modeEdit, setModeEdit] = useState(false)

    return (
        <Container>
            <PageHeader title={'Meu Perfil'}/>
            <ContainerProfile>
                <EditProfile name={user?.name ?? ""} email={user?.email ?? ""} data={'Março 2026'} onEdit={() => setModeEdit(!modeEdit)}/>
            </ContainerProfile >
                <ContainerEdit modal={modeEdit}>
                    <EditFormUser />
                </ContainerEdit>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const ContainerProfile = styled.div`
    display: flex;
    border-radius: 10px;
    background-color: #FFF;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const ContainerEdit = styled.div<ContainerEditProps>`
    background-color: #FFFFFF;
    border-radius: 10px;
    margin: auto;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    display: ${props => props.modal ? "flex": "none"};
`