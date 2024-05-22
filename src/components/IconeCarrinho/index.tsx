import { FC, useState } from "react";
import "./index.css";
import { Close, Delete, ShoppingCart } from "@mui/icons-material";
import { obterCarrinho, obterQuantidadeCarrinho, removerItemCarrinho, addCarrinho } from "../../store/CarrinhoStore/carrinhoStoreUtil";
import { Badge, Box, Button, Drawer, Grid, IconButton, Typography } from "@mui/material";
import { ICarrinhoStore } from "../../store/CarrinhoStore/types";
import InputQuantidade from "../InputQuantidade";

const IconeCarrinho: FC = () => {
    const [carrinho, setCarrinho] = useState<ICarrinhoStore[]>(obterCarrinho());
    const [open, setOpen] = useState<boolean>(false);

    const removerProdutoCarrinho = (id: number) => {
        const carrinhoAtualizado: ICarrinhoStore[] = removerItemCarrinho(id);

        setCarrinho([...carrinhoAtualizado]);
    }

    const atualizarQuantidadeProduto = (item: ICarrinhoStore) => {
        const carrinhoAtualizado = addCarrinho(item);

        setCarrinho([...carrinhoAtualizado]);
    }

    return <>
        <div className="header"
            onClick={() => { setOpen(true) }}
        >
            <Badge
                badgeContent={obterQuantidadeCarrinho()}
                color="primary"
                anchorOrigin={{

                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <ShoppingCart color={"action"} />
            </Badge>
        </div >
        <Drawer open={open} anchor="right" classes={{
            paper: "tamanho"
        }}>
            <Box paddingLeft={'10px'} paddingRight={'10px'} >
                <Button
                    variant="text"
                    color="primary"
                    startIcon={<Close />}
                    style={{ marginTop: 10, marginBottom: 30 }}
                    onClick={() => { setOpen(false) }}
                >
                    Fechar
                </Button>
            </Box>
            <Box paddingLeft={'10px'} paddingRight={'10px'}>
                {!carrinho?.length && (<>
                    <Box><Typography variant="body1">Seu carrinho está vazio.</Typography></Box>
                </>)}
                {carrinho?.map((item: ICarrinhoStore, index: number) => {
                    return <>
                        <Grid container alignItems="center" width="100%">
                            <Grid className="box-imagem" item xs={1}>
                                <img className="imagem" src={item.imagemPequena} alt="" />
                            </Grid>
                            <Grid className="box-detalhes" item xs={7} md={5}>
                                <Box className="produto-nome"><strong style={{ wordWrap: "break-word" }}>{item?.nome || ""}</strong></Box>
                            </Grid>
                            <Grid className="box-quantidade" item xs={4}>
                                <InputQuantidade 
                                    quantidade={item.quantidade} 
                                    atualizarQuantidade={(quantidade: number) => {
                                        atualizarQuantidadeProduto({
                                            ...item,
                                            quantidade
                                        });
                                    }} />
                            </Grid>
                            <Grid className="box-remover" item xs={1}>
                                <IconButton onClick={() => {
                                    removerProdutoCarrinho(item.id);
                                }}><Delete color="error" /></IconButton>
                            </Grid>
                        </Grid>
                    </>
                })}
            </Box>

        </Drawer>
    </>
}

export default IconeCarrinho;