import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { STATUS_CODE, apiGet } from "../../api/RestClient";
import { IProdutosDetalhe } from "./types";
import './index.css';
import BotaComprar from "../../components/BotaoComprar";

function DetalhesProdutos() {
    const { codigoProduto } = useParams<any>();
    const [produto, setProduto] = useState<IProdutosDetalhe>();
    useEffect(() => {
        console.log(">>>", codigoProduto);
        apiGet(`/produtos/${codigoProduto}`).then((response) => {
            if (response.statusCode === STATUS_CODE.OK) {
                setProduto(response.data);
            }
        })
    }, []);

    return <>
        <div className="body-produto">
            <div className="produto-detalhe">
                <div className="imagem-produto">
                    <img src={produto?.imagemGrande} />
                </div>
                <div className="dados-produto">
                    <div className="nome-produto">{produto?.nome}</div>
                    <hr />
                    <div className="codigo-produto">Código do produto: {produto?.codigoProduto}</div>
                    <div className="precos-produto">
                        <div>Preço: R$ {produto?.preco}</div>
                        <div><BotaComprar
                            onClick={(event) => {

                            }} />
                        </div>
                    </div>
                </div>
            </div>
            <hr className="separador-dados-produto-hr"/>
            <div className="descricao-produto">
                <div>{produto?.descricao}</div>
            </div>
        </div>
    </>
}

export default DetalhesProdutos;