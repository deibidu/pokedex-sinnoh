import axios from "axios";
import { useEffect, useState } from "react";
import "../utils/models/fetchPokemon.css";
import "../style.css";
import * as PokemonInfoApi from "./models/index";
import { ToggleButtonBlockList } from "../components/ToggleButtonBlockList";
import { FaHeart } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import { Pagination } from "../components/Pagination";
import { usePagination } from "../components/usePagination";

// Raíz base de la llamada a la API
const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// Llama a la API
export const PokemonList = ({ favoritos = false }) => {
  const [favoritosFilter, setFavoritosFilter] = useState(false);
  const [pokemonData, setPokemonData] = useState<
    PokemonInfoApi.PokemonDetailsItemFromApi[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<"list" | "block">("list");
  const { page, nextPage, prevPage } = usePagination();
  const perPage = 12;

  // Hace la promesa
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Función que calcula como mostrar el Pokémon Turwig hasta el Pokémon legendario Arceus
        const sinnohPokemonIds = Array.from(
          { length: 493 - 387 + 1 },
          (_, index) => 387 + index
        );

        // Función para sacar los datos de los Pokémon
        const promises = sinnohPokemonIds.map((id) =>
          axios.get(`${BASE_URL}/${id}`)
        );

        // Función que se ejecuta cuando las promesas se cumplen
        const responses = await Promise.all(promises);
        const data = responses.map((response) => ({
          ...response.data,
          isFav: false,
        }));

        const savedPokemon = JSON.parse(
          localStorage.getItem("pokemonFavoritoGuardado") || "[]"
        );

        const dataPokemonFavsSaved = data.map((pokemon) => ({
          ...pokemon,
          isFav: savedPokemon.includes(pokemon.id),
        }));

        setPokemonData(dataPokemonFavsSaved);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Función del cambio de formato lista a columna/bloque y viceversa
  const handleChangeMode = (newMode: "list" | "block") => {
    setMode(newMode);
  };

  // Función de filtrado de favoritos
  const handlePokemonFav = (id: number) => {
    const newPokemonData = pokemonData.map((pokemon) => {
      if (pokemon.id === id) {
        return { ...pokemon, isFav: !pokemon.isFav };
      }
      return pokemon;
    });

    setPokemonData(newPokemonData);

    // Local Storage

    const savePokemon = pokemonData
      .filter((pokemon) => pokemon.isFav)
      .map((pokemon) => pokemon.id);
    localStorage.setItem(
      "pokemonFavoritoGuardado",
      JSON.stringify(savePokemon)
    );

    //
  };

  const filteredPokemonFav = () => {
    return pokemonData.filter((pokemon) => (favoritos ? pokemon.isFav : true));
  };

  const handleFavoritosFilter = () => {
    setFavoritosFilter(!favoritosFilter);
  };

  // La carga de todo
  if (loading) {
    return <>Loading Pokemon...</>;
  }

  return (
    <>
      <Navbar
        handleFavoritosFilter={handleFavoritosFilter}
        handleFullPokedex={() => setFavoritosFilter(false)}
      />
      <div className="slide-in-bottom">
        <ToggleButtonBlockList onChangeMode={handleChangeMode} />
        <div className={mode === "list" ? "wrapList-mode" : "wrapBlock-mode"}>
          {pokemonData && pokemonData.length > 0 ? (
            filteredPokemonFav()
              // paginacion de los pokemon
              //.slice((page - 1) * perPage, page * perPage)
              //
              .map((pokemonItem) => (
                <div
                  className={`${
                    mode === "list" ? "cardItemList-mode" : "cardItemBlock-mode"
                  } ${
                    document.body.classList.contains("dark-theme")
                      ? "dark-theme"
                      : ""
                  }`}
                  key={pokemonItem.id}
                >
                  <img
                    className={
                      mode === "list" ? "pkball-icon" : "pkball-icon-off"
                    }
                    src={"/pokeball-icon.svg"}
                  ></img>
                  <img
                    className={
                      mode === "list" ? "pkmnImage" : "pkmnImageBlock-mode"
                    }
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonItem.id}.png`}
                    alt={pokemonItem.name}
                  />
                  <div
                    className={
                      mode === "list" ? "pkmnitem" : "pkmnitemBlock-mode"
                    }
                  >
                    <p
                      className={`${"pkmnNumber"} ${
                        document.body.classList.contains("dark-theme")
                          ? "dark-theme"
                          : ""
                      }`}
                    >
                      Nº {pokemonItem.id}
                    </p>
                    <p
                      className={`${"pkmnName"} ${
                        document.body.classList.contains("dark-theme")
                          ? "dark-theme"
                          : ""
                      }`}
                    >
                      {pokemonItem.name}
                    </p>
                  </div>
                  <div
                    className={
                      mode === "list" ? "flexStats" : "flexStats-block"
                    }
                  >
                    <div
                      className={
                        mode === "list"
                          ? "pkmnStatsList-mode"
                          : "pkmnStatsBlock-mode"
                      }
                    >
                      <p
                        className={
                          mode === "list"
                            ? "pkmnStatList-mode"
                            : "pkmnStatBlock-mode"
                        }
                      >
                        Ataque:{" "}
                      </p>
                      <p
                        className={
                          mode === "list"
                            ? "pkmnResultsList-mode"
                            : "pkmnResultsBlock-mode"
                        }
                      >
                        {
                          pokemonItem.stats.find(
                            (stat) => stat.stat.name === "attack"
                          )?.base_stat
                        }
                      </p>
                    </div>
                    <div
                      className={
                        mode === "list"
                          ? "pkmnStatsList-mode"
                          : "pkmnStatsBlock-mode"
                      }
                    >
                      <p
                        className={
                          mode === "list"
                            ? "pkmnStatList-mode"
                            : "pkmnStatBlock-mode"
                        }
                      >
                        Defensa:{" "}
                      </p>
                      <p
                        className={
                          mode === "list"
                            ? "pkmnResultsList-mode"
                            : "pkmnResultsBlock-mode"
                        }
                      >
                        {
                          pokemonItem.stats.find(
                            (stat) => stat.stat.name === "defense"
                          )?.base_stat
                        }
                      </p>
                    </div>

                    <div
                      className={
                        mode === "list"
                          ? "pkmnStatsList-mode"
                          : "pkmnStatsBlock-mode"
                      }
                    >
                      <p
                        className={
                          mode === "list"
                            ? "pkmnStatList-mode"
                            : "pkmnStatBlock-mode"
                        }
                      >
                        Ataque Esp:{" "}
                      </p>
                      <p
                        className={
                          mode === "list"
                            ? "pkmnResultsList-mode"
                            : "pkmnResultsBlock-mode"
                        }
                      >
                        {
                          pokemonItem.stats.find(
                            (stat) => stat.stat.name === "special-attack"
                          )?.base_stat
                        }
                      </p>
                    </div>
                    <div
                      className={
                        mode === "list"
                          ? "pkmnStatsList-mode"
                          : "pkmnStatsBlock-mode"
                      }
                    >
                      <p
                        className={
                          mode === "list"
                            ? "pkmnStatList-mode"
                            : "pkmnStatBlock-mode"
                        }
                      >
                        Defensa Esp:{" "}
                      </p>
                      <p
                        className={
                          mode === "list"
                            ? "pkmnResultsList-mode"
                            : "pkmnResultsBlock-mode"
                        }
                      >
                        {
                          pokemonItem.stats.find(
                            (stat) => stat.stat.name === "special-defense"
                          )?.base_stat
                        }
                      </p>
                    </div>
                  </div>
                  <div className="iconFav">
                    <i>
                      <FaHeart
                        onClick={() => {
                          handlePokemonFav(pokemonItem.id);
                        }}
                        style={{
                          color: pokemonItem.isFav
                            ? "var(--color-red)"
                            : "var(--color-black)",
                          cursor: "pointer",
                        }}
                      />
                    </i>
                  </div>
                </div>
              ))
          ) : (
            <p>No Pokemon data available</p>
          )}
        </div>
      </div>
      <div>
        <Pagination
          page={page}
          perPage={perPage}
          nextPage={nextPage}
          prevPage={prevPage}
          maxItems={pokemonData?.length}
        />
      </div>
    </>
  );
};

export default PokemonList;
