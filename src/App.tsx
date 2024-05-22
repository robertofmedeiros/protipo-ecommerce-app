import logSenac from './logo-senac-cnc-color-100.png';
import Menubar from './components/MenuBar';
import Footer from './components/Footer';
import Routers from './Routers';
import './style.css'
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { obterCarrinho } from './store/CarrinhoStore/carrinhoStoreUtil';
import IconeCarrinho from './components/IconeCarrinho';
import IconeLogin from './components/IconeLogin';

function App() {
  const [nome, setNome] = useState<string>();

  useEffect(() => {
    obterCarrinho();
  }, [])

  return (
    <div className='body'>
      <div className='container-principal'>
        <div className='header'>
          <header>
            <div style={{ display: "flex", width: "100%" }}>
              <h1 style={{ width: "100px", height: "59px" }}>
                <img style={{ width: "100px", height: "59px" }} src={logSenac} alt="logo" />
              </h1>
              <div className='campo-busca-main'>
                <div className='campo-busca'>
                  <Paper>
                    <InputBase
                      className='campos-busca-input-base'
                      placeholder="Buscar por nome do produto"
                      inputProps={{ color: "#F7941D" }}
                      onChange={(event) => {
                        if (event) {
                          setNome(event.target.value);
                        }
                      }}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          window.location.href = nome ? `/?busca=${nome}` : `/`;
                        }
                      }}
                    />
                    <IconButton type="submit" aria-label="search" href={nome ? `/?busca=${nome}` : `/`}>
                      <SearchIcon />
                    </IconButton>
                  </Paper>
                </div>
              </div>
              <div className="login">
                  <IconeLogin />
              </div>
              <div className="carrinho">
                  <IconeCarrinho />
              </div>
            </div>
            <Menubar />
          </header>
          <Routers />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
