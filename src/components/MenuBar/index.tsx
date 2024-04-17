import { FC } from "react";
import './style.css';

const Menubar: FC = () => {
    return <>
        <div className="menu">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/BAZAR">Bazar</a></li>
                <li><a href="/ELETRO">Eletro</a></li>
                <li><a href="/CASA_BANHO">Cama, Mesa e Banho</a></li>
            </ul>
        </div>
    </>
}

export default Menubar;