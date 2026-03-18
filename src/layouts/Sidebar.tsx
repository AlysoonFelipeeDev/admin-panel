import { ChartSpline, LayoutDashboard, LogOut, Settings, UserRoundPen, Users } from "lucide-react"
import { Link} from "react-router-dom"
import styled from "styled-components"


export function Sidebar(){
    return (
        <>
            <Header>ADMIN PAINEL</Header>
            <Container>
                <OptionsPages to={'/'}>
                    <LayoutDashboard/> 
                    <span>Painel</span>
                </OptionsPages>
                <OptionsPages to={"/users"}>
                    <Users/> 
                    <span>Usuários</span>
                </OptionsPages>
                <OptionsPages to={'#'}>
                    <ChartSpline/>  
                    <span>Relatórios</span>
                </OptionsPages>
                <OptionsPages to={"/profile"}>
                    <UserRoundPen /> 
                    <span>Meu Perfil</span>
                </OptionsPages>
                <OptionsPages to={'#'}>
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
const OptionsPages = styled(Link)`
    text-decoration: none;
    display: flex;
    padding: 20px 0 20px 30px;
    align-items: center;
    color: #ffffff;
    cursor: pointer;
    transition: background 0.3s ease;
    span {
        padding-left: 10px;
    }

    &:hover{
        background-color: #375b8a;
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