import { FC } from "react";

interface BotaComprarProperties {
    onClick: (event: any) => void;
}

const BotaComprar: FC<BotaComprarProperties> = ({
    onClick,
}) => {
    return <>
        <div className='produto_botao'>
            <button
                onClick={onClick}>
                    Comprar
            </button>
        </div>
    </>;
};

export default BotaComprar;