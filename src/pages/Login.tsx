import styled from "styled-components"

export function Login(){
    return (
        <Container>
            <ContainerForm>
                <h1>Entre no painel:</h1>
                <Form>
                    <div>
                        <label htmlFor="name">Email:</label>
                        <input type="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password"/>
                    </div>
                    <ButtonLogin><button>Entrar</button></ButtonLogin>
                </Form>
                <Register>
                    <p>Não tem cadastro?<button>Clique aqui!</button></p>
                </Register>
            </ContainerForm>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #375b8a;
    width: 100%;
    height: 100vh;
`
const ContainerForm = styled.div`
    border-radius: 20px;
    background-color: #ffffff;
    box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 50px;
    h1{
        text-align: center;
    }
    
`
const Form = styled.form`
    margin-top: 20px;
    width: 500px;
    div {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    input {
        padding: 10px;
        border-radius: 5px;
    }
`

const ButtonLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        padding: 5px 100px;
        cursor: pointer;
    }
`

const Register= styled.div`
    p {
        text-align: center;
    }
    button{
        margin-left:5px;
        border: none;
        background-color: transparent;
        text-decoration: underline;
        cursor: pointer;
        color: #375b8a;
    }
`