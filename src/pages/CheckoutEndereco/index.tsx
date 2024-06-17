import { Card, CardContent, Checkbox, Radio } from "@mui/material";
import { FC, useEffect, useState } from "react";
import "./index.css"


const CheckoutEndereco: FC = () => {
    const [enderecos, setEnderecos] = useState<any[]>();

    useEffect(() => {
        const enderecosTemp = [
            {
                id: 1,
                rua: "Teste",
                bairro: "teste",
                cidade: "teste",
                uf: "SC",
                selecionado: false,
                titulo: "Casa"
            },
            {
                id: 55,
                rua: "Teste",
                bairro: "teste",
                cidade: "teste",
                uf: "SC",
                selecionado: false,
                titulo: "Trabalho"
            }
        ]

        setEnderecos(enderecosTemp);
    }, []);

    return <>
        <div>
            {enderecos?.length && enderecos?.map((row, index) => (
                <div className="card-endereco">
                    <Card sx={{width: "100%"}}>
                        <CardContent>
                            <div className="card-endereco-frame">
                                <div className="card-endereco-action">
                                    <Checkbox
                                        checked={row.selecionado}
                                        onChange={(event: any) => {

                                            const state = enderecos.map((e: any) => {
                                                return { ...e, selecionado: false }
                                            })

                                            state[index].selecionado = event.target.checked;
                                            setEnderecos(state);
                                        }} />
                                </div>
                                <div className="card-endereco-body">
                                        <div className="card-endereco-titulo">
                                            <strong>{row.titulo}</strong>
                                        </div>
                                        <div className="card-endereco-detalhes">
                                            <div className="card-endereco-detalhes-elementos">
                                                Rua: {row.rua}
                                            </div>
                                            <div className="card-endereco-detalhes-elementos">
                                                Bairro: {row.bairro}
                                            </div>
                                            <div className="card-endereco-detalhes-elementos">
                                                Cidade: {row.cidade} 
                                            </div>
                                            <div className="card-endereco-detalhes-elementos">
                                                Estado: {row.uf} 
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    </>
}

export default CheckoutEndereco;