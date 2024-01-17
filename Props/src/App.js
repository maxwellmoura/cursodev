import "./App.css";
import { useState } from "react";
import CardAnimal from "./CardAnimal"
import CardInformacoes from "./Card";
import Topo from "./Topo";

export default function App() {
  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState("cachorro");

  return (
    <div className="App">
      <Topo tipoAnimal={tipoDoComponenteCard} setState={setTipoDoComponenteCard} />
      <CardAnimal tipoAnimal={tipoDoComponenteCard} />
      <CardInformacoes tipoAnimal={tipoDoComponenteCard} />
    </div>
  );
}