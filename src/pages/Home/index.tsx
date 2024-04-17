import { useEffect, useState } from 'react';
import './index.css';
import { STATUS_CODE, apiGet } from '../../api/RestClient';
import { useParams, useSearchParams } from 'react-router-dom';
import { IProdutos } from './types';
import BotaComprar from '../../components/BotaoComprar';

function Home() {
    const { categoria } = useParams<any>();
    const [produtos, setProdutos] = useState<IProdutos[]>();
    const [searchParams, setSearchParams] = useSearchParams();

    const carregarProdutos = async () => {
        const busca = searchParams.get("busca");

        let url = "/produtos/";

        if (categoria) {
            url = `/produtos/categoria/${categoria}`;
        }

        if (busca && busca !== 'undefined') {
            url = `/produtos/?nome=${busca}`;
        }
        const response = await apiGet(url);
        if (response.statusCode === STATUS_CODE.OK) {
            setProdutos(response.data);
        }
    }

    useEffect(() => {
        carregarProdutos();
    }, []);

    return <>
        {produtos?.length ? <>
            <div className='container'>
                {produtos?.map((p: any) => <>
                    <div className="produto">
                        <a className="produto_imagem" href={`/produto/detalhe/${p.id}`}><img src={p.imagemPequena} /></a>
                        <div className="produto_nome">
                            <p>
                                <a href={`/produto/detalhe/${p.id}`}>{p.nome}</a>
                            </p>
                        </div>
                        <div className="produto_preco">
                            <p>R$ {p.preco}</p>
                        </div>
                        <BotaComprar
                            onClick={(event) => {

                            }} />
                    </div>
                </>)}

            </div>
        </> : <>
            <div className='produto-nao-encontrado'>
                <p>Nehum produto encontrado!</p>
            </div>
        </>}
    </>
}

export default Home;