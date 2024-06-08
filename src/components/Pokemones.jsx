import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Pokemones() {
  const [pokemones, setPokemones] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => setPokemones(response.data.results))
      .catch(error => console.error('Error fetching Pokemon data:', error));
  }, []);

  const handleChange = (event) => {
    setSelectedPokemon(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedPokemon) {
      navigate(`/pokemones/${selectedPokemon}`);
    }
  };

  return (
    <div className="text-center content-box">
        <h1>Selecciona un pokemon</h1>
    <div className="d-flex align-items-center justify-content-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <select className="form-select" value={selectedPokemon} onChange={handleChange}>
              <option value="">Pokemones</option>
              {pokemones.map(pokemon => (
                <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Ver Detalle</button>
        </form>
      </div>
    </div>
  );
}

export default Pokemones