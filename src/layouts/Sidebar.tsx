import { ChartSpline, LayoutDashboard, LogOut, Settings, UserRoundPen, Users } from "lucide-react"
import styled from "styled-components"

export function Sidebar(){
    return (
        <>
            <Header>ADMIN PAINEL</Header>
            <Container>
                <OptionsPages>
                    <LayoutDashboard/> 
                    <span>Painel</span>
                </OptionsPages>
                <OptionsPages>
                    <Users/> 
                    <span>Usuários</span>
                </OptionsPages>
                <OptionsPages>
                    <ChartSpline/>  
                    <span>Relatórios</span>
                </OptionsPages>
                <OptionsPages>
                    <UserRoundPen/> 
                    <span>Meu Perfil</span>
                </OptionsPages>
                <OptionsPages>
                    <Settings/> 
                    <span>Configurações</span>
                </OptionsPages>
            </Container>
            <Logout>
                    <LogOut color="red"/>
                <button>
                    Sair
                </button>
            </Logout>
        </>
    )
}

const Header =  styled.header`
background-color: #263850;
height: 50px;
color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
    margin: 0 0 40px 0
`

const Container = styled.ul`
    display: flex;
    flex-direction: column;
`
const OptionsPages = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    margin-left: 30px;
    color: #ffffff;
    cursor: pointer;
    span {
        padding-left: 10px;
    }
`

const Logout = styled.div`
    display: flex;
    align-items: center;
    color: #FFFFFF;
    padding-left: 30px;
    cursor: pointer;
    position: absolute;
    bottom: 30px;
    button {
        border: none;
        background-color: transparent;
        color: red;
        cursor: pointer;
    }
`