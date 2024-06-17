import { FC, useState } from "react";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import "./index.css";
import { Popover } from "@mui/material";
import Login from "../Login";
import { IClientesStore } from "../../store/ClientesStore/types";
import { obterCliente } from "../../store/ClientesStore/clientesStoreUtil";

const IconeLogin: FC = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [clienteStore, setClienteStore] = useState<IClientesStore>(obterCliente());

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    const loginRealizado = (cliente: IClientesStore) => {
        setClienteStore(cliente);
    }

    return <>
        <div className="container-login" onClick={handleClick}>
            <div className="div-login">
                <PersonOutlineIcon sx={{ fontSize: 40 }} color={"primary"} />
            </div>
            <div className="div-usuario">
                <div className="texto-login">Olá, {clienteStore?.nome ? clienteStore?.nome : "Visitante"}</div>
                <div className="texto-login">Tenha um bom dia</div>
            </div>
        </div>
        {!clienteStore?.id && <>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Login
                    onClose={handleClose}
                    onLogin={loginRealizado} />
            </Popover>
        </>}
    </>
}

export default IconeLogin;