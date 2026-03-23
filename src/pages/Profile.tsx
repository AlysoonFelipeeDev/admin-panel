import styled from "styled-components"
import { PageHeader } from "../components/Ui/PageHeader"
import { EditProfile } from "../components/Ui/EditProfile"
import { useUser } from "../contexts/AuthContext"

export function Profile(){
    const {user} = useUser()

    return (
        <Container>
            <PageHeader title={'Meu Perfil'}/>
            <ContainerProfile>
                <EditProfile name={user?.name ?? ""} email={user?.email ?? ""} data={'Março 2026'}/>
            </ContainerProfile>
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