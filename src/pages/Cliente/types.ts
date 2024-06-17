export const generos = [
    {
        value: "MASCULINO",
        text: "Masculino"
    },
    {
        value: "FEMININO",
        text: "Feminino"
    },
    {
        value: "INDEFINIDO",
        text: "Não quero responder"
    },
]

export interface IClientes {
    id:             number;
    nome:           string;
    sobrenome:      string;
    email:          string;
    dataNascimento: Date;
    sexo:           string;
    documento:      string;
}