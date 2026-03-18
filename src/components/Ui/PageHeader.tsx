import styled from "styled-components"
import { Button } from "./Button"

interface PageHeaderProps {
    title: string
}

export function PageHeader({title}: PageHeaderProps){
    return (
        <HeaderSection>
            <Title>{title}</Title>
            <Button>+ Novo Usuário</Button>
        </HeaderSection>
    )
}

const HeaderSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0
`

const Title = styled.h1`
    font-size: 30px;
    font-weight: 530;
`

