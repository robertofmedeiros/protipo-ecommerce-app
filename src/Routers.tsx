import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DetalhesProdutos from './pages/DetalhesProduto';

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:categoria" element={<Home />} />
                <Route path="/produto/detalhe/:codigoProduto" element={<DetalhesProdutos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;