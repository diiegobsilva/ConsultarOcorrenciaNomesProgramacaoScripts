import React from 'react'
import styled from 'styled-components';

interface Props {
    nome: string,
    setNome: Function,
    consultarOcorrencias: () => void;
}

export default function Input({nome, setNome, consultarOcorrencias}: Props) {
  return (
    <ContainerInput>
        <CampoInput
            placeholder="Primeiro Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
        />
        <Button onClick={consultarOcorrencias}>Obter</Button>
    </ContainerInput>
  )
}
const CampoInput = styled.input`
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
const Button = styled.button`
    margin-left: 20px;
    padding: 4px 10px 4px 10px;
    border-width: 0; 
    border-radius: 5px;
    font-size: 14px;
    background-color: #61dafb;
`;