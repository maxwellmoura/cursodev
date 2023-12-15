
import './App.css';
import Topo from './componentes/Topo/Header';
import Banner from './componentes/TopoConteudo/Banner';
import Produtos from './componentes/Produtos/Produtos';
import Conteudo from './componentes/Conteudo/Conteudo';
import Rodape from './componentes/Rodape/Rodape';

function App() {
  return (
    <div className="limitar">
      <Topo />
      <Banner />
      <Produtos />
      <Conteudo />
      <Rodape />
    </div>
  );
}

export default App;
