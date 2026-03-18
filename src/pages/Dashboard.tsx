import styled from "styled-components";
import { PageHeader } from "../components/Ui/PageHeader";import { StatCard } from "../components/Ui/StatCard";
import { TaskTable } from "../components/Ui/TaskTable";
import { RecentActivities } from "../components/Ui/RecentActivities";
;

export function Dashboard() {
    const activities = [
        {time: '40 min atrás', activity: "Trabalho Realizado", description: "cod. 1234"},
        {time: '1hr atrás', activity: "Iniciou uma atividade", description: "cod. 4567"},
        {time: '3 dias atrás', activity: "Concluiu um curso", description: "IA aplicada em software"},
    ]

    const items = [
        {order: 1234, client: "Angélica Almeida", status: true},
        {order: 4567, client: "Alberto Silva", status: false}
    ]
    const stats = [
        {label: 'Trabalhos do dia:', value: 12},
        {label: 'Trabalhos completos:', value: 5},
        {label: 'Trabalhos incompletos:', value: 7},
    ]
    return (
        <Container>
            <PageHeader title={"Bem vindo Alyson!"}/>
            <WorksDatas>
            {stats.map(stat => (
                <StatCard label={stat.label} value={stat.value}/>
            ))}
            </WorksDatas>
            <ContainerActivies>
                <RecentActivities array={activities}/>
                <ContainerTable>
                    <TaskTable array={items}/>
                </ContainerTable>
            </ContainerActivies>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
`

const WorksDatas = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
`
const ContainerActivies = styled.div`
    display: grid;
    grid-template-columns: 350px 1fr;
    gap: 10px;
    margin-top: 30px;
`

const ContainerTable = styled.div`
    width: 100%;
    overflow-x: auto;
    border-radius: 8px;
`
