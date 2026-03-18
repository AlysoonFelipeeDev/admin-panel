import styled from "styled-components"
import { StatCard } from "../components/Ui/StatCard"
import { PageHeader } from "../components/Ui/PageHeader"
import { UserTable } from "../components/Ui/UserTable"

export function Users() {
        const users = [
            { name: "Alyson", email:"alyson@teste.com", position: "Admin", actions: "Ativo" },
            { name: "Priscila", email:"prii@teste.com", position: "Member", actions: "Desativado" },
        ];
        const stats = [
            { label: "Total Usuários:", value: 150 },
            { label: "Admins Ativos:", value: 12 },
            { label: "Membros:", value: 138 },
        ]
    return (
        <Container>
            <HeaderSection>
            <PageHeader title={"Gerenciamento de Usuários"} action={" + Novo Usuário"}/>
            </HeaderSection>
            <StatsGrid>
                {stats.map(stat => (
                    <StatCard key={stat.label} label={stat.label} value={stat.value}/>
                ))}
            </StatsGrid>
            <TableContainer>
                <UserTable array={users}/>
            </TableContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const HeaderSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0
`

const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
`

const TableContainer = styled.div`
    margin-top: 30px;
    overflow-x: auto;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`