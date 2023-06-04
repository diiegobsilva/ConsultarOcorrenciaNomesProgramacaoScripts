export interface NomeIBGE {
    nome: string;
    sexo: string;
    localidade: string;
    res: Ocorrencia[];
  }
export interface Ocorrencia {
    periodo: string;
    frequencia: number;
}