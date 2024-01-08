import "./App.css";

import { useState } from "react";

export default function App() {
  const [novoEstilo, setNovoEstilo] = useState("bg-vermelho");

  const alterarCor = () => {
    setNovoEstilo("bg-azul");
  };

  return (
    <div className="display">
      <div className="container">
        <h1>Alterar cor de fundo:</h1>
        <div className={novoEstilo}></div>
        <p>Clique no botão abaixo para alterar a cor da caixa.</p>
        <button onClick={alterarCor}>Mudar Cor</button>
      </div>
    </div>
  );
}

