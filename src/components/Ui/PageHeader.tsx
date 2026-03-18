import type { ReactNode } from "react"
import styled from "styled-components"

interface PageHeaderProps {
    title: string
    action?: ReactNode
}

export function PageHeader({title, action}: PageHeaderProps){
    return (
        <>
            <Title>{title}</Title>
            {action ? 
            <Button>{action}</Button> :
            ""
            }
        </>
    )
}

const Title = styled.h1`
    font-size: 30px;
    font-weight: 530;
`

const Button = styled.button`
    border: none;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    background-color: #2D425F;
    color: #FFFFFF;
`