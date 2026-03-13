import type { ReactNode } from "react"
import styled from "styled-components"

interface DefaultLayoutProps {
    children: ReactNode
}

export function DefaultLayout({children}: DefaultLayoutProps) {
    return (
        <Container>
            <Sidebar></Sidebar>
            <ContentContainer>
                <Header></Header>
                {children}
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 240px 1fr;
    height: 100vh;
    background-color: #F3F3F7;
`

const Sidebar = styled.div`
    grid-column: 1;
    background-color: #6621F9;
`

const ContentContainer = styled.div`
    display: grid;
    grid-template-rows: 50px 1fr;
    gap: 10px;
    margin: 0 20px
    
`

const Header = styled.header`
    background-color: #FFFFFF;
    border-radius: 10px
`


