import "./estilo.css";
import ImagemCachorro from "../img/cao.jpg";
import ImagemGato from "../img/gato.jpg";

export default function CardAnimal({ tipoAnimal }) {
  return (
    <div className="CardAnimal" id="card">
      <img src={tipoAnimal === "cachorro" ? ImagemCachorro : ImagemGato} alt="animal" />
    </div>
  );
}