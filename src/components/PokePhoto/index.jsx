import "./styles.scss";
import { getPokemon } from "../../utils/functions";
import { useEffect, useState } from "react";

export function PokePhoto(props) {
  const [pokeImg, setPokeImg] = useState("");

  async function getPokemonImg() {
    const pokemon = await getPokemon(props.name);

    setPokeImg(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`
    );
  }

  useEffect(() => {
    getPokemonImg();
  }, []);

  return (
    <div className='poke-photo'>
      {pokeImg !== "" && <img src={pokeImg} alt={`Foto do ${props.name}`} />}
    </div>
  );
}
