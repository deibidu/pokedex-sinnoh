export interface PokemonListItem {
  name: string;
  id: number;
  imageURL: string;
  isFav: boolean;
}

export interface PokemonListItemFromApi {
  url: string;
  name: string;
}
