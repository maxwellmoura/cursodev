import React, { useState } from 'react';
import './App.css';
export default function GeradorNomes() {
  const [nomeAleatorio, setNomeAleatorio] = useState()
  function alterarNome(){
    const nomeNovo = Math.floor(Math.random());
    setNomeAleatorio(nomeNovo);
  }
  return(
    <div className='centralizar'>
      <h3>Nome Aleatório</h3>
      <h1>{nomeAleatorio}</h1>
      <div>
        <label>
          Click no botão para gerar nome aleatório:
        </label>
        <button onClick={alterarNome}>Gerar nome</button>
      </div>
    </div>
  )
}