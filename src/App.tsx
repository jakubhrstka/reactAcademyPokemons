import React, { useEffect, useState } from "react";

import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { GridStyled } from "./components/Grid";
import { PageStyled } from "./components/Page";

import { api } from "./lib/api";

import { IPokemonBasic, IFetchPokemonResponse } from "./types";

export const App: React.FC = () => {
  const [pokemonsList, setPokemonsList] = useState<IFetchPokemonResponse | null>(null);
  const [pokemons, setPokemons] = useState<IPokemonBasic[]>([]);

  const getPokemons = async () => {
    try {
      const result = await api.fetchPokemons();

      setPokemonsList(result.data);
      setPokemons(result.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const loadMoreHandler = async () => {
    try {
      if (pokemonsList) {
        const result = await api.fetchMorePokemons(pokemonsList.next);

        setPokemonsList(result.data);

        let pokemonsCopy = [...pokemons];
        setPokemons(pokemonsCopy.concat(result.data.results));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <PageStyled>
      <GridStyled>
        {pokemons.map((pokemon, idx) => (
          <Card key={idx} pokemon={pokemon} />
        ))}
      </GridStyled>
      <Button onClick={loadMoreHandler}>Get more pokemons</Button>
    </PageStyled>
  );
};
