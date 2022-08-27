import Axios from "axios";

export const api = {
  fetchPokemons: () => Axios.get("https://pokeapi.co/api/v2/pokemon"),
  fetchPokemon: (name: string) =>
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`),
  fetchMorePokemons: (next: string) => Axios.get(next),
};
