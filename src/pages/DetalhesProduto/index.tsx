import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { STATUS_CODE, apiGet } from "../../api/RestClient";
import { IProdutosDetalhe } from "./types";
import './index.css';
import BotaComprar from "../../components/BotaoComprar";
import { Box, IconButton, TextField } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { addCarrinho } from "../../store/CarrinhoStore/carrinhoStoreUtil";
import ComfirmaModal from "../../components/ConfirmaModal";

function DetalhesProdutos() {
    const { codigoProduto } = useParams<any>();
    const [produto, setProduto] = useState<IProdutosDetalhe>();
    const [quantidade, setQuantidade] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);

    const onCloseModal = () => {
        setOpen(false);
    }

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
                        <div style={{display: "flex"}}>
                            <div className="div-box">
                                <Box className="box">
                                    <IconButton
                                        size="small"
                                        className="remove"
                                        onClick={() => {
                                            setQuantidade(quantidade - 1)
                                        }}
                                    >
                                        <RemoveIcon fontSize="small" />
                                    </IconButton>

                                    <TextField
                                        className="input"
                                        margin="normal"
                                        type="number"
                                        size="small"
                                        value={quantidade}
                                        onChange={(event) => {
                                            if(event){
                                                setQuantidade(Number(event.target.value || ""))
                                            }
                                        }}

                                    />

                                    <IconButton
                                        size="small"
                                        className="add"
                                        onClick={() => {
                                            setQuantidade(quantidade + 1)
                                        }}
                                    >
                                        <AddIcon fontSize="small" />
                                    </IconButton>
                                </Box>
                            </div>
                            <div className="div-comprar">
                                <BotaComprar
                                    onClick={() => {
                                        setOpen(true);
                                    }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="separador-dados-produto-hr" />
            <div className="descricao-produto">
                <div>{produto?.descricao}</div>
            </div>
        </div>

        <ComfirmaModal
            open={open}
            titulo={"Add Carrinho"} 
            mensagem={"Confirma adicionação do produto no carrinho?"} 
            onConfirma={() => {
                if(produto){
                    addCarrinho({
                        ...produto,
                        quantidade,
                    });

                    setOpen(false);
                    window.location.href = "/"
                }
            }} onCancelar={() => {
                onCloseModal();
            }}  />
    </>
}

export default DetalhesProdutos;