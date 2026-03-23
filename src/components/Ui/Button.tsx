import type { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps  extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    children: ReactNode
}

export function Button({children, ...props}: ButtonProps){
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    cursor: pointer;
    font-weight: 500;
    transition: opacity 0.2s;
    color: #ffffff;
    background-color: #2D425F;

    &:hover { opacity: 0.9;}
    &:disabled { cursor: not-allowed}
`