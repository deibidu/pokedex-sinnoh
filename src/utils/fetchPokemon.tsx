import axios from "axios";
import { useEffect, useState } from "react";
import "../utils/models/fetchPokemon.css";
import * as PokemonInfoApi from "./models/index";
import { ToggleButtonBlockList } from "../components/ToggleButtonBlockList";
import { FaHeart } from "react-icons/fa6";
import Navbar from "../components/Navbar";

//raiz base de la llamda a la api

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// llama a la api

export const PokemonList = () => {
  const [favoritosFilter, setFavoritosFilter] = useState(false);
  const [pokemonData, setPokemonData] = useState<
    PokemonInfoApi.PokemonDetailsItemFromApi[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<"list" | "block">("list");

  // haces la promesa

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // función que calcula como mostrar el pokemon Turwig hasta el pokemon legendario Arceus
        const sinnohPokemonIds = Array.from(
          { length: 493 - 387 + 1 },
          (_, index) => 387 + index
        );
        const promises = sinnohPokemonIds.map((id) =>
          axios.get(`${BASE_URL}/${id}`)
        );
        // funcion que funciona (o no, luego te dice el error) cuando las promesas se cumplen
        const responses = await Promise.all(promises);
        const data = responses.map((response) => ({
          ...response.data,
          isFav: false,
        }));

        setPokemonData(data);
        setLoading(false);
        // indicador si hay un error
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // funcion del cambio de formato lista a columna/bloque y viceversa
  const handleChangeMode = (newMode: "list" | "block") => {
    setMode(newMode);
  };

  // funcion de filtrado de favoritos (un lío al final)
  const handlePokemonFav = (id: number) => {
    const newPokemonData = pokemonData.map((pokemon) => {
      if (pokemon.id === id) {
        return { ...pokemon, isFav: !pokemon.isFav };
      }
      return pokemon;
    });
    setPokemonData(newPokemonData);
  };

  const filteredPokemonFav = () => {
    return pokemonData.filter((pokemon) => !favoritosFilter || pokemon.isFav);
  };

  const handleFavoritosFilter = () => {
    setFavoritosFilter(!favoritosFilter);
  };

  // la carga de todo
  if (loading) {
    return <>Loading Pokemon...</>;
  }

  return (
    <>
      <Navbar
        // cambia de filtro de pokedex a favoritos y viceversa
        handleFavoritosFilter={handleFavoritosFilter}
        handleFullPokedex={() => setFavoritosFilter(false)}
      />
      <div className="slide-in-bottom">
        {/* cambia la clase de lista a bloque del contenedor de items */}
        <ToggleButtonBlockList onChangeMode={handleChangeMode} />

        <div className={mode === "list" ? "wrapList-mode" : "wrapBlock-mode"}>
          {pokemonData && pokemonData.length > 0 ? (
            filteredPokemonFav().map((pokemonItem) => (
              // cambia la clase de lista a bloque del item
              <div
                className={
                  mode === "list" ? "cardItemList-mode" : "cardItemBlock-mode"
                }
                key={pokemonItem.id}
              >
                <img
                  className={
                    mode === "list" ? "pkmnImage" : "pkmnImageBlock-mode"
                  }
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonItem.id}.png`}
                  alt={pokemonItem.name}
                />
                <div className="pkmnitem">
                  <p>{pokemonItem.name.toUpperCase()}</p>
                  <div className="pkmnitem">
                    <p>Nº {pokemonItem.id}</p>
                  </div>
                </div>

                <div className="flexStats">
                  <div
                    className={
                      mode === "list" ? "pkmnStatsList-mode" : "pkmnStats"
                    }
                  >
                    <p
                      className={
                        mode === "list" ? "pkmnStatList-mode" : "pkmnStat"
                      }
                    >
                      Ataque:{" "}
                    </p>{" "}
                    <p
                      className={
                        mode === "list" ? "pkmnResultsList-mode" : "pkmnResults"
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
                      mode === "list" ? "pkmnStatsList-mode" : "pkmnStats"
                    }
                  >
                    <p
                      className={
                        mode === "list" ? "pkmnStatList-mode" : "pkmnStat"
                      }
                    >
                      Defensa:{" "}
                    </p>{" "}
                    <p
                      className={
                        mode === "list" ? "pkmnResultsList-mode" : "pkmnResults"
                      }
                    >
                      {
                        pokemonItem.stats.find(
                          (stat) => stat.stat.name === "defense"
                        )?.base_stat
                      }
                    </p>
                  </div>
                </div>
                <div className="flexStats">
                  <div
                    className={
                      mode === "list" ? "pkmnStatsList-mode" : "pkmnStats"
                    }
                  >
                    <p
                      className={
                        mode === "list" ? "pkmnStatList-mode" : "pkmnStat"
                      }
                    >
                      Ataque Esp:{" "}
                    </p>{" "}
                    <p
                      className={
                        mode === "list" ? "pkmnResultsList-mode" : "pkmnResults"
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
                      mode === "list" ? "pkmnStatsList-mode" : "pkmnStats"
                    }
                  >
                    <p
                      className={
                        mode === "list" ? "pkmnStatList-mode" : "pkmnStat"
                      }
                    >
                      Defensa Esp:{" "}
                    </p>{" "}
                    <p
                      className={
                        mode === "list" ? "pkmnResultsList-mode" : "pkmnResults"
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
                      onClick={() => handlePokemonFav(pokemonItem.id)}
                      style={{
                        color: pokemonItem.isFav
                          ? " var(--color-red)"
                          : "var(--color-black)",
                        cursor: "pointer",
                      }}
                    />{" "}
                  </i>
                </div>
              </div>
            ))
          ) : (
            <p>No Pokemon data available</p>
          )}
        </div>
      </div>
      {/* <Pagination /> */}
    </>
  );
};

export default PokemonList;
