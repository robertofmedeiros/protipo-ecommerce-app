import { FC, useState } from "react";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import "./index.css";
import { Popover } from "@mui/material";
import Login from "../Login";

const IconeLogin: FC = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    return <>
        <div className="container-login" onClick={handleClick}>
            <div className="div-login">
                <PersonOutlineIcon sx={{ fontSize: 40 }} color={"primary"} />
            </div>
            <div className="div-usuario">
                <div className="texto-login">Olá, Visitante</div>
                <div className="texto-login">Entre ou cadastra-se</div>
            </div>
        </div>
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <Login onClose={handleClose}/>
        </Popover>
    </>
}

export default IconeLogin;