import React from 'react';
import './App.css';

const Teclado = () => {
  return (
    <div className="teclado">
      0.75
    </div>
  )
}

const Botao = (props) => {
  return (
    <div className={props.tipo}>
      {props.digito}
    </div>
  )
}

function App() {
  return (
    <div className="teclado-botoes">
      <Teclado />
        <Botao tipo="botao-ac" digito="AC" />
        <Botao tipo="botao-ope" digito="/" />
        <Botao tipo="botao-num" digito="7" />
        <Botao tipo="botao-num" digito="8" />
        <Botao tipo="botao-num" digito="9" />
        <Botao tipo="botao-ope" digito="*" />
        <Botao tipo="botao-num" digito="4" />
        <Botao tipo="botao-num" digito="5" />
        <Botao tipo="botao-num" digito="6" />
        <Botao tipo="botao-ope" digito="-" />
        <Botao tipo="botao-num" digito="1" />
        <Botao tipo="botao-num" digito="2" />
        <Botao tipo="botao-num" digito="3" />
        <Botao tipo="botao-ope" digito="+" />
        <Botao tipo="botao-zer" digito="0" />
        <Botao tipo="botao-num" digito="." />
        <Botao tipo="botao-ope" digito="=" />
    </div>
  );
}

export default App;
