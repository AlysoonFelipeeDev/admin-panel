import type { ReactNode } from "react"
import styled from "styled-components"

interface UserTableProps {
    array: {
        name: string,
        email: string,
        position: string,
        actions: ReactNode
    }[]
}

export function UserTable({array}: UserTableProps){
    return (
        <StyledTable>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Função</th>
                    <th>Ações</th>
                </tr>
            </thead>
                <tbody>
                        {array.map(item => (
                    <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.position}</td>
                            <td>{item.actions}</td>
                    </tr>
                        ))}
                </tbody>
        </StyledTable>
    )
}

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #FFF;
    text-align: left;

    thead {
        background-color: #f8f9fa;
        border-bottom: 2px solid #eee;
    }

    th {
        padding: 12px 16px;
        font-weight: 600;
        color: #333;
    }

    td {
        padding: 12px 16px;
        border-bottom: 1px solid #eee;
        color: #555
    }

    tr:hover {
        background-color: #f1f5f9;
        transition: background 0.2s ease;
    }
`

