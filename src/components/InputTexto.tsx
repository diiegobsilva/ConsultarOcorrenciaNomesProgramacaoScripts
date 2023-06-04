import React from 'react'
import styled from 'styled-components';
import { NomeIBGE } from '../types';

interface Props{
    data: NomeIBGE[],
}

export default function InputTexto({data}:Props) {
  return (
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
  )
}
const ContainerText = styled.div`
    font-size: medium;
    color: #de6113;
    text-align: left;
    padding-right: 48%;
    padding-bottom: 10px;
`;
