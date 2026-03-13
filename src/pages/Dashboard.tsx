import styled from "styled-components"

export function Dashboard() {
    return (
        <>
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
        </>
    )
}

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