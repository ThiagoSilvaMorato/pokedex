import axios from "axios";

//Função para receber a página desejada
export async function getAllPokemon(page = 1) {
  const pokemonsAPI = `https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}&limit=20`;
  const result = await axios.get(pokemonsAPI);
  return result.data;
}

//Função para receber o id do pokemon
export async function getPokemon(pokemon) {
  const pokemonsAPI = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const result = await axios.get(pokemonsAPI);
  return result.data;
}

console.log(await getAllPokemon(2));
