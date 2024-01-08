import "./App.css";

import { useState } from "react";

export default function App() {
  const [novaCor, setNovaCor] = useState("bg-vermelho");

  const alterarCor = () => {
    if (novaCor === "bg-vermelho") {
      setNovaCor('bg-azul');
    } else {
      setNovaCor('bg-vermelho')
    }
  };

  return (
    <div className="display">
      <div className="container">
        <h1>Alterar cor de fundo:</h1>
        <div className={novaCor}></div>
        <p>Clique no botão abaixo para alterar a cor da caixa.</p>
        <button onClick={alterarCor}>Mudar Cor</button>
      </div>
    </div>
  );
}
