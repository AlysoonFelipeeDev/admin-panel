import styled from "styled-components"

export function DefaultLayout() {
    return (
        <Container>
            <Sidebar></Sidebar>
            <ContentContainer>
                <Header></Header>
                <Datas>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </Datas>
                <Reports>
                    <div></div>
                    <div></div>
                </Reports>
                <Orders>
                    <div></div>
                    <div></div>
                </Orders>
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
    grid-template-rows: 50px 100px 1fr 1fr;
    gap: 10px;
    margin: 0 20px
    
`

const Header = styled.header`
    background-color: #FFFFFF;
    border-radius: 10px
`

const Datas = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    div {
        background-color: #FE7C0D;
        border-radius: 10px
    }
`

const Reports = styled.div`
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 10px;
    div {
        background-color: #FFFFFF;
        border-radius: 10px
    }
`

const Orders = styled.div`
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: 10px;
    div {
        background-color: #FF005A;
        border-radius: 10px;
        margin-bottom: 10px;
    }
`
