import type { ReactNode } from "react"
import styled from "styled-components"
import { Sidebar } from "./Sidebar"
import { Header } from "./Header"

interface DefaultLayoutProps {
    children: ReactNode
}

export function DefaultLayout({children}: DefaultLayoutProps) {
    return (
        <Container>
            <SidebarContainer>
                <Sidebar/>
            </SidebarContainer>
            <ContentContainer>
                <HeaderContainer>
                    <Header/>
                </HeaderContainer>
                {children}
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 240px 1fr;
    height: 100vh;
    background-color: #c9c9c9;
`

const SidebarContainer = styled.div`
    grid-column: 1;
    background-color: #242B33;
    position: relative;
`

const ContentContainer = styled.div`
    display: grid;
    grid-template-rows: 50px 1fr;
    gap: 10px;
    margin: 0 20px;
`

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #263850;
    color: #FFFFFF;
    border-radius: 10px;
    padding: 0 20px
`


