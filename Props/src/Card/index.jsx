import "./estilo.css";

export default function CardInformacoes({ tipoAnimal }) {
  let nomeAnimalCachorro = "Cachorro";
  let nomeAnimalGato = "Gato";
  let informacaoCachorro = "É um mamífero carnívoro da família dos canídeos.";
  let informacaoGato = "É um mamífero carnívoro da família dos felídeos.";

  return (
    <div className="CardInformacao">
      <h3>Informação sobre o {tipoAnimal === "cachorro" ? nomeAnimalCachorro : nomeAnimalGato}</h3>
      <p>{tipoAnimal === "cachorro" ? informacaoCachorro : informacaoGato}</p>
    </div>
  );
}