import "../styles/NomesIbege.css"
import styled from 'styled-components';
import { useState } from "react";
import axios from "axios";
import { NomeIBGE } from "../types";

export function Nome() {
    const [nome, setNome] = useState('');
    const [data, setData] = useState<NomeIBGE[]>([]);

    const consultarOcorrencias = async () => {
      try {
        const response = await axios.get(
          `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome}`
        );
        setData(response.data);

      } catch (error) {
        console.error('Erro ao consultar as ocorrências:', error);
      }
    };
    
    return (
        <Container>
        <ContainerInput>
          <Input
            placeholder="Primeiro Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Button onClick={consultarOcorrencias}>Obter</Button>
        </ContainerInput>
    
        <ContainerText>
          {data.map((item) => (
            <div>
              <p>Nome: {item.nome}</p>
              {item.res.map((ocorrencia) => (
                <div>
                  <p>{ocorrencia.periodo}: {ocorrencia.frequencia}</p>
               
                </div>
              ))}
            </div>
          ))}
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
