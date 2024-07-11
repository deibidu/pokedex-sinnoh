import "./Home.css";
import { PokemonList } from "../utils/fetchPokemon";

// import { Pagination } from "../components/Pagination";

export const Home = () => {
  // const { page, nextPage, prevPage, backToHome } = Pagination();

  // const perPage = 12;

  return (
    <>
      <div></div>
      <div>
        <PokemonList />
        {/*  page={page} perPage={perPage} pokemonItem={pokemon} */}
      </div>
      {/* <Pagination>
        page={page}, perPage={perPage}, nextPage={nextPage}, prevPage={prevPage}
        , maxItems={PokemonList?.lenght!}
      </Pagination> */}
    </>
  );
};
