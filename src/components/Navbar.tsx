import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { ToggleButton } from "./ToggleButton";

const Navbar = ({
  handleFavoritosFilter,
  handleFullPokedex,
}: {
  handleFavoritosFilter: () => void;
  handleFullPokedex: () => void;
}) => {
  return (
    <>
      <nav className="nav">
        <div className="pokedex-name">
          <img
            className={"icon"}
            src={"/pokeball-blue.png"}
            alt={"icono de pokeball de color azul"}
          />
          <p>Pokédex Sinnoh</p>
          <img
            className={"icon"}
            src={"/pokeball-blue.png"}
            alt={"icono de pokeball de color azul"}
          />
        </div>

        <div className="navbar">
          <div className="nav-buttons">
            <button
              className="button-navbar"
              onClick={handleFullPokedex}
              type="submit"
            >
              <NavLink to="/Home" />
              Pokédex
            </button>
            <button
              onClick={handleFavoritosFilter}
              className="button-navbar"
              type="submit"
            >
              <NavLink to="/Favoritos" />
              Favoritos
            </button>
          </div>

          <div className="toggleButton-section">
            <img
              className={"cherrim-icon"}
              src={"/cherrim-sunshine.png"}
              alt={"pókemon cherrim sunshine version"}
            />
            <ToggleButton />
            <img
              className={"cherrim-icon"}
              src={"/cherrim-overcast.png"}
              alt={"pokémon cherrim overcast version"}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
