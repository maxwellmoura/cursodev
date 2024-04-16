import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Paginas
import Home from './pages/Home';
import About from './pages/About';
import Conteudo from './pages/Conteudo';
// Componentes
import Navbar from './componentes/NavBar';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/conteudo' element={<Conteudo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
