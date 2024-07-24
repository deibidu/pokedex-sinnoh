import "./Navbar.css";
import "../style.css";
import { NavLink } from "react-router-dom";
import { ToggleButton } from "./ToggleButton";
import { usePagination } from "./usePagination";
import { useState } from "react";

const Navbar = ({
  handleFavoritosFilter,
  handleFullPokedex,
}: {
  handleFavoritosFilter: () => void;
  handleFullPokedex: () => void;
}) => {
  const { backToHome } = usePagination();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        className={`${"nav"} ${
          document.body.classList.contains("dark-theme") ? "dark-theme" : ""
        }`}
      >
        <div
          className={`${"pokedex-name"} ${
            document.body.classList.contains("dark-theme") ? "dark-theme" : ""
          }`}
          style={{ cursor: "pointer" }}
          onClick={backToHome}
        >
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

        <div className={`navbar ${isOpen ? "open" : ""}`}>
          <div className="nav-buttons">
            <NavLink
              to="/Home"
              className={({ isActive }) =>
                `button-navbar ${
                  isActive ? "button-navbar--active" : ""
                } ${"toggleButton-section"} ${
                  document.body.classList.contains("dark-theme")
                    ? "dark-theme"
                    : ""
                }`
              }
              onClick={handleFullPokedex}
            >
              Pokédex
            </NavLink>
            <NavLink
              to="/Favoritos"
              className={({ isActive }) =>
                `button-navbar ${
                  isActive ? "button-navbar--active" : ""
                } ${"toggleButton-section"} ${
                  document.body.classList.contains("dark-theme")
                    ? "dark-theme"
                    : ""
                }`
              }
              onClick={handleFavoritosFilter}
            >
              Favoritos
            </NavLink>
          </div>

          <div
            className={`${"toggleButton-section"} ${
              document.body.classList.contains("dark-theme") ? "dark-theme" : ""
            }`}
          >
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
        <div
          className={`nav_burger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
