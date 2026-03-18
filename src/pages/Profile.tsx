import styled from "styled-components"
import { PageHeader } from "../components/Ui/PageHeader"
import { EditProfile } from "../components/Ui/EditProfile"

export function Profile(){
    return (
        <Container>
            <PageHeader title={'Meu Perfil'}/>
            <ContainerProfile>
                <EditProfile name={'Alyson Felipe Ozório'} email={'alyson@teste.com'} data={'Março 2026'}/>
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