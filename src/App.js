import React from 'react';
import './App.css';

import PaginaInicial from './Componentes/home';
import Rodape from './Componentes/rodape'
import Topo from './Componentes/cabecalho'


export default function App() {
  return (
    <div className="App">
      <Topo />
      <PaginaInicial />
      <Rodape />
    </div>
  );
}