import styled from "styled-components"

interface StatCardProps {
    label: string
    value: string | number 
}

export function StatCard({label, value}: StatCardProps){
    return (
        <Card>
            <Label>{label}</Label>
            <Value>{value}</Value>
        </Card>
    )
}

const Card = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    border: 1px solid #e1e4e8;
`

const Label = styled.p`
    color: #666; font-size: 14px;
`

const Value = styled.p`
    font-size: 24px; color: #242B33;
`
