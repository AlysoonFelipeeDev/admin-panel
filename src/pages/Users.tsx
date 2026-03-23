import styled from "styled-components"
import { StatCard } from "../components/Ui/StatCard"
import { PageHeader } from "../components/Ui/PageHeader"
import { UserTable } from "../components/Ui/UserTable"
import { useUsers } from "../hooks/useUsers"
import { Button } from "../components/Ui/Button"


export function Users() {
        const {users, deleteUser} = useUsers()
        const adminsActive = users.filter(admin => admin.role === 'admin')
        const memberActive = users.filter(member => member.role === 'member')
        const stats = [
            { label: "Total Usuários:", value: users.length },
            { label: "Admins Ativos:", value: adminsActive.length },
            { label: "Membros:", value: memberActive.length },
        ]
        const formatedUsers = users?.map(user => ({
            name: user.name,
            email: user.email,
            position: user.role,
            actions: (
                <ContainerButtons>
                    <Button>
                        Editar
                    </Button>
                    <Button onClick={() => deleteUser(user.id)}>
                        Deletar
                    </Button>
                </ContainerButtons> 
            )
        })) || []
    return (
        <Container>
            <PageHeader title={"Gerenciamento de Usuários"}/>
            <StatsGrid>
                {stats.map(stat => (
                    <StatCard key={stat.label} label={stat.label} value={stat.value}/>
                ))}
            </StatsGrid>
            <TableContainer>
                <UserTable array={formatedUsers}/>
            </TableContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
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

const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 150px;
`