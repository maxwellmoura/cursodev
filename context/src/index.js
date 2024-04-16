import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CounterContextProvider } from './context/CounterContext';
import { TituloCorContextoProvider } from './context/TituloCorContexto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*Criando o Provider*/}
    <CounterContextProvider>
      <TituloCorContextoProvider>
        <App />
      </TituloCorContextoProvider>
    </CounterContextProvider>
  </React.StrictMode>
);


reportWebVitals();
