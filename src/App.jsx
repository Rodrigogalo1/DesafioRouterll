import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Pokemones from './components/Pokemones';
import PokemonDetail from './components/PokemonDetail';

function App() {
  return (
    <div className="App d-flex justify-content-center align-items-center vh-100">
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:name" element={<PokemonDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;