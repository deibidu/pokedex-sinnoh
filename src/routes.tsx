import App from "./App";

import PokemonList from "./utils/fetchPokemon";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/Home" replace />,
      },
      {
        path: "/Home",
        element: <PokemonList />,
      },
      {
        path: "/Favoritos",
        element: <PokemonList favoritos={true} />,
      },
    ],
  },
]);
