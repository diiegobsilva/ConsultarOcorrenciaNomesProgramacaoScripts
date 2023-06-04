import "../styles/NomesIbege.css"
import styled from 'styled-components';
import { useState } from "react";
import axios from "axios";
import { NomeIBGE } from "../types";
import Input from "./Input";
import InputTexto from "./InputTexto";

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
            <Input nome={nome} setNome={setNome} consultarOcorrencias={consultarOcorrencias}/>
            <InputTexto data={data}/>
        </Container>
    )
}

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

