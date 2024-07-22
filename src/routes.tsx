import App from "./App";
import { Home } from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import PokemonList from "./utils/fetchPokemon";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Home",
        element: <Home />,
        Component: PokemonList,
      },
      {
        path: "/Favoritos",
        element: <Favoritos />,
        Component: PokemonList,
      },
    ],
  },
]);
