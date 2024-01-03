import React, { useState } from 'react';
import './App.css';

export default function PaginaInicial(){
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);
  function gerarNumero(){
    const novoNumero = Math.floor(Math.random() * (100-1) + 1);
    setNumeroAleatorio(novoNumero);
  }
  return(
    <div className='centralizar'>
      <h3>Número aleatório:</h3>
      <h1>{numeroAleatorio}</h1>
      <div className='botao'>
        <label>
          Click no botão abaixo para gerar um número aleatório:
        </label>
        <button onClick={gerarNumero}>Gerar Número</button>
      </div>
    </div>
  )

}