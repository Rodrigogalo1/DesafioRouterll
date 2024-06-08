import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function PokemonDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => setPokemon(response.data))
      .catch(error => console.error('Error fetching Pokemon data:', error));
  }, [name]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card text-center">
        <div className="card-header">
          <h2 className="card-title text-capitalize">{pokemon.name}</h2>
        </div>
        <div className="card-body">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} className="card-img-top" />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">HP: {pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat}</li>
            <li className="list-group-item">Attack: {pokemon.stats.find(stat => stat.stat.name === 'attack').base_stat}</li>
            <li className="list-group-item">Defense: {pokemon.stats.find(stat => stat.stat.name === 'defense').base_stat}</li>
            <li className="list-group-item">Special Attack: {pokemon.stats.find(stat => stat.stat.name === 'special-attack').base_stat}</li>
            <li className="list-group-item">Special Defense: {pokemon.stats.find(stat => stat.stat.name === 'special-defense').base_stat}</li>
            <li className="list-group-item">Speed: {pokemon.stats.find(stat => stat.stat.name === 'speed').base_stat}</li>
          </ul>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" onClick={() => navigate('/pokemones')}>Volver a la lista</button>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;