import "../styles/NomesIbege.css"
import styled from 'styled-components';

export function Nome() {
    return (
        <Container>
            <ContainerInput>
                <Input placeholder="Primeiro Nome"/>
                <Button>Obter</Button>
            </ContainerInput>

            <ContainerText>
                <p>Nome: DIEGO</p>
                <p>teste</p>
            </ContainerText>
        </Container>
    )
}

const Button = styled.button`
    margin-left: 20px;
    padding: 4px 10px 4px 10px;
    border-width: 0; 
    border-radius: 5px;
    font-size: 14px;
    background-color: #61dafb;
`;

const Container = styled.div`
    border-width: 1px; 
    border-style: solid; 
    border-radius: 10px;
    border-color: #61dafb;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #363636;
    padding: 20px;
`;

const Input = styled.input`
    outline: none;
    font-size: 14px;
    border-width: 0; 
    border-radius: 5px;
    padding: 4px 10px 4px 10px;
    
`;

const ContainerInput = styled.div`
    outline: none;
    font-size: 14px;
    border-width: 0; 
    border-radius: 5px;
    padding: 4px 10px 4px 10px;
`;

const ContainerText = styled.div`
    font-size: medium;
    color: #de6113;
    text-align: left;
    padding-right: 48%;
    padding-bottom: 10px;
`;
