import styled from "styled-components"
import { Button } from "./Ui/Button"

export function EditFormUser(){
    return (
        <Container>
            <Form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name"/>
                </div>
                <div>
                    <label htmlFor="email"> Email:</label>
                    <input type="email"  id="email" />
                </div>
                <div>
                    <label htmlFor="role">Função</label>
                    <select id="role">
                        <option value="admin">Administrador(a)</option>
                        <option value="memeber">Membro(a)</option>
                    </select>
                </div>
                <Button type="submit">Atualizar</Button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    background-color: #FFFFFF;
    border-radius: 10px;
    margin: auto;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 280px;
    label {
        display: flex;
    }
    input {
        margin-bottom: 20px;
        width: 100%;
        border-radius: 10px;
        padding: 8px;
        box-sizing: border-box;
    }
    select {
        margin-bottom: 20px;
    }
`
