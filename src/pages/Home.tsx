import "./Home.css";
import { PokemonList } from "../utils/fetchPokemon";

export const Home = () => {
  return (
    <>
      <div></div>
      <div>
        <PokemonList />
        {/*  page={page} perPage={perPage} pokemonItem={pokemon} */}
      </div>
    </>
  );
};
