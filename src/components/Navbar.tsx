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
            <NavLink
              to="/Home"
              className={({ isActive }) =>
                `button-navbar ${isActive ? "button-navbar--active" : ""}`
              }
              onClick={handleFullPokedex}
            >
              Pokédex
            </NavLink>
            <NavLink
              to="/Favoritos"
              className={({ isActive }) =>
                `button-navbar ${isActive ? "button-navbar--active" : ""}`
              }
              onClick={handleFavoritosFilter}
            >
              Favoritos
            </NavLink>
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
