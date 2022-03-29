import React, { useEffect, useState } from "react";

import "./style.scss";

import { getAllPokemon } from "../../utils/functions";

import { PokePhoto } from "../PokePhoto";

export function Body() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [hasPrevious, setHasPrevious] = useState(false);

  //Função para pegar os dados dos pokemons
  async function getPokemon(page) {
    const pokemonData = await getAllPokemon(page);

    setHasNext(pokemonData.next !== null);
    setHasPrevious(pokemonData.previous !== null);

    setPokemons(pokemonData.results);
  }
  useEffect(() => getPokemon(page), [page]);

  function handleNextPage() {
    setPage(page + 1);
  }

  function handlePreviousPage() {
    setPage(page - 1);
  }

  return (
    <div className='body'>
      <div className='poke-list'>
        {pokemons.map((pokemon) => {
          const pokeName = pokemon.name;

          return (
            <div className='pokemons'>
              <PokePhoto key={pokemon.name} name={pokemon.name} />
              <p>{pokeName.charAt(0).toUpperCase() + pokeName.slice(1)}</p>
            </div>
          );
        })}
      </div>
      <div className='pages'>
        {hasPrevious && <button onClick={handlePreviousPage}>Previous</button>}
        <strong className='divisor'>|</strong>
        {hasNext && <button onClick={handleNextPage}>Next</button>}
      </div>
    </div>
  );
}
