import styled from "styled-components"

interface TaskTableProps {
    array : {
        order: number,
        client: string,
        status: boolean
    }[]
}

export function TaskTable({array}: TaskTableProps){
    return (
        <StyledTable>
            <thead>
                <tr>
                    <th>Ordem de serviço</th>
                    <th>Cliente</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {array.map(item => (
                    <tr>
                        <td>{item.order}</td>
                        <td>{item.client}</td>
                        <td>{item.status ? "Realizado" : "Aberto"}</td>
                    </tr>
                ))}
            </tbody>
        </StyledTable>
    )
}

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color:  #fff;
    text-align: left;

    thead {
        background-color: #f8f9fa;
        border-bottom: 2px solid #eee;
    }

    
    th {
        padding: 12px 16px;
        font-weight: 600;
        color: #333
    }
    
    td {
        padding: 12px 16px;
        border-bottom: 1px solid #eee;
        color: #555;
    }
    
    tr:hover {
        background-color: #f1f5f9;
        transition: background 0.2s ease;
    }
`
