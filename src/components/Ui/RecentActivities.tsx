import styled from "styled-components"

interface RecentActivitiesProps {
    array : {
        time: string,
        activity: string,
        description: string
    }[]
}
export function RecentActivities({array}: RecentActivitiesProps){
    return (
        <Container>
            <h2>Atividades Recentes</h2>
            {array.map(item => (
                <ContainerActivities>
                            <span>{item.time}</span>
                            <Recents>
                                <p>{item.activity}</p>
                                <p>{item.description}</p>
                            </Recents>
                </ContainerActivities>
            ))}
        </Container>
    )
}

const Container = styled.div`
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    h2 {
        color: #181717;
        margin: 10px;
    }
`

const ContainerActivities = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    background-color: #ddd6d6;
    color: #3a2d2d;
`

const Recents = styled.div`
    margin-left: 50px;
    p {
        margin-bottom: 10px;
    }
`