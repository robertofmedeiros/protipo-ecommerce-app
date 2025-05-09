import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DetalhesProdutos from './pages/DetalhesProduto';
import Cliente from './pages/Cliente';
import CheckoutEndereco from './pages/CheckoutEndereco';

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:categoria" element={<Home />} />
                <Route path="/produto/detalhe/:codigoProduto" element={<DetalhesProdutos />} />
                <Route path="/cliente/" element={<Cliente />} />
                <Route path="/checkout/endereco" element={<CheckoutEndereco />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;