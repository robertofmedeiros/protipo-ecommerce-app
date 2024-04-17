import logSenac from './logo-senac-cnc-color-100.png';
import Menubar from './components/MenuBar';
import Footer from './components/Footer';
import Routers from './Routers';
import './style.css'
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

function App() {
  const [nome, setNome] = useState<string>();

  return (
    <div className='body'>
      <div style={{ maxWidth: "100%", width: "90%" }}>
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
                        if(event){
                          setNome(event.target.value);
                        }
                      }}
                      onKeyDown={(event) => {
                        if (event.key === "Enter"){
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
