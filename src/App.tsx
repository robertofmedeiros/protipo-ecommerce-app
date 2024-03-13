import React from 'react';
import logo from './logo.svg';
import './style.css';
import logSenac from './logo-senac-cnc-color-100.png';
import Menubar from './components/MenuBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='body'>
      <div style={{ width: "80%" }}>

        <header>
          <div style={{ display: "flex", width: "100%" }}>
            <h1 style={{ width: "100px", height: "59px" }}>
              <img style={{ width: "100px", height: "59px" }} src={logSenac} alt="logo" />
            </h1>
          </div>
          <Menubar />
        </header>
        <div className='container'>
          <div className="produto">
            <a className="produto_imagem" href="#"><img src="https://cdn.pixabay.com/photo/2013/11/24/11/10/lab-217043_1280.jpg"/></a>
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
            <a className="produto_imagem" href="#"><img src="https://cdn.pixabay.com/photo/2017/06/28/10/53/board-2450236_1280.jpg"/></a>
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
            <a className="produto_imagem" href="#"><img src="https://cdn.pixabay.com/photo/2017/10/05/21/45/laboratory-2821207_1280.jpg"/></a>
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
            <a className="produto_imagem" href="#"><img src="https://cdn.pixabay.com/photo/2017/05/29/00/57/microscope-2352651_1280.jpg"/></a>
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
            <a className="produto_imagem" href="#"><img src="https://cdn.pixabay.com/photo/2014/04/05/11/39/read-316508_1280.jpg"/></a>
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
      <Footer />
    </div>
  );
}

export default App;
