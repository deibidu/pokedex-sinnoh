export interface NamedApiResource {
  url: string;
  name: string;
}

export interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonDetailsItemFromApi {
  id: number;
  name: string;
  baseExperience: number;
  stats: Stat[];
  isFav: boolean;
}

export interface PokemonDetails {
  id: number;
  name: string;
  baseExperience: number;
  stats: Stat[];
  isFav: boolean;
}
