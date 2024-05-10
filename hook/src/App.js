import './App.css';
//Importando as Routes!
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
//Pages!
import Home from './pages/Home';
import About from './pages/About';

import { HookUseContext } from './components/HookUseContext';

function App() {
  return (
    <div className="App">
   <HookUseContext>
   <h1>React Hooks</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </BrowserRouter>
   </HookUseContext>
    </div>
  );
}

export default App;
