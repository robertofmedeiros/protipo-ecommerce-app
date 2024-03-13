import { FC } from "react";
import './style.css';

const Menubar: FC = () => {
    return <>
        <div className="menu">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    </>
}

export default Menubar;