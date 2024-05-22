import { FC } from "react";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import "./index.css";

const IconeLogin: FC = () => {
    return <>
        <div className="container-login">
            <div className="div-login">
                <PersonOutlineIcon sx={{ fontSize: 40 }} color={"primary"} />
            </div>
            <div className="div-usuario">
                <div className="texto-login">Olá, Visitante</div>
                <div className="texto-login">Entre ou cadastra-se</div>
            </div>
        </div>
    </>
}

export default IconeLogin;