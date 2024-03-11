import React from 'react';
import logo from './logo.svg';
import './style.css';
import logSenac from './logo-senac-cnc-color-100.png';

function App() {
  return (
    <div style={{ maxWidth: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "80%" }}>

        <header>
          <div style={{ display: "flex", width: "100%" }}>
            <h1 style={{ width: "100px", height: "59px" }}>
              <img style={{ width: "100px", height: "59px" }} src={logSenac} alt="logo" />
            </h1>
          </div>
        </header>
        <div className='container'>
          <div className="produto">
            <a className="produto_imagem" href="#"></a>
            <div className="produto_nome">
              <p>
                <a href="#">Teste 1</a>
              </p>
            </div>
            <div className="produto_preco">
              <p>R$10,00</p>
            </div>
            <div className='produto_botao'>
              <button>Comprar</button>
            </div>
          </div>
          <div className="produto">
            <a className="produto_imagem" href="#"></a>
            <div className="produto_nome">
              <p>
                <a href="#">Teste 2</a>
              </p>
            </div>
            <div className="produto_preco">
              <p>R$10,00</p>
            </div>
            <div className='produto_botao'>
              <button>Comprar</button>
            </div>
          </div>
          <div className="produto">
            <a className="produto_imagem" href="#"></a>
            <div className="produto_nome">
              <p>
                <a href="#">Teste 3</a>
              </p>
            </div>
            <div className="produto_preco">
              <p>R$10,00</p>
            </div>
            <div className='produto_botao'>
              <button>Comprar</button>
            </div>
          </div>
          <div className="produto">
            <a className="produto_imagem" href="#"></a>
            <div className="produto_nome">
              <p>
                <a href="#">Teste 4</a>
              </p>
            </div>
            <div className="produto_preco">
              <p>R$10,00</p>
            </div>
            <div className='produto_botao'>
              <button>Comprar</button>
            </div>
          </div>
          <div className="produto">
            <a className="produto_imagem" href="#"></a>
            <div className="produto_nome">
              <p>
                <a href="#">Teste 5</a>
              </p>
            </div>
            <div className="produto_preco">
              <p>R$10,00</p>
            </div>
            <div className='produto_botao'>
              <button>Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
