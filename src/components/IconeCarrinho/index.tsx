import { FC, useEffect, useState } from "react";
import "./index.css";
import { Close, Delete, ShoppingCart } from "@mui/icons-material";
import { useObservable } from "../../store/storeUtil";
import { carrinho$, obterCarrinho, obterQuantidadeCarrinho } from "../../store/CarrinhoStore/carrinhoStoreUtil";
import { Badge, Box, Button, Drawer, Grid, IconButton, Typography } from "@mui/material";
import { ICarrinhoStore } from "../../store/CarrinhoStore/types";

const IconeCarrinho: FC = () => {
    const carrinho = obterCarrinho();
    const [quantidade, setQuantidade] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        setQuantidade(carrinho?.length || 0);
    }, []);
    return <>
        <div className="header"
            onClick={() => { setOpen(true) }}
        >
            <Badge
                badgeContent={obterQuantidadeCarrinho() || "0"}
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
                        <Grid container alignItems="center">
                            <Grid className="box-imagem" item xs>
                                <img className="imagem" src={item.imagemPequena} alt="" />
                            </Grid>
                            <Grid className="box-detalhes" item xs>
                                <Box className="produto-nome"><strong style={{ wordWrap: "break-word" }}>{item?.nome || ""}</strong></Box>
                            </Grid>
                            <Grid className="box-quantidade" item xs>
                                
                            </Grid>
                            <Grid className="box-remover" item xs>
                                <IconButton onClick={() => {

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