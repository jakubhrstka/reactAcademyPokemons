import React, { useState, useEffect, useCallback } from "react";

import { CardStyled } from "./Card.styled";

import { IPokemonBasic, IPokemonInfo } from "../../types";

import { api } from "../../lib/api";

interface CardProps {
  pokemon: IPokemonBasic;
}

export const Card: React.FC<CardProps> = ({ pokemon }) => {
  const [pokemonInfo, setPokemonInfo] = useState<IPokemonInfo | null>(null);

  const getInfo = useCallback(async () => {
    try {
      const result = await api.fetchPokemon(pokemon.name);

      setPokemonInfo(result.data);
    } catch (error) {
      console.log(error);
    }
  }, [pokemon]);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  return (
    <CardStyled>
      <h3>{pokemon.name}</h3>
      <img src={pokemonInfo?.sprites.other.dream_world.front_default} alt={pokemon.name} />
      <p>
        <strong>Experience:</strong> {pokemonInfo?.base_experience}
      </p>
      <p>
        <strong>Weight:</strong> {pokemonInfo?.weight}
      </p>
      <p>
        <strong>Height:</strong> {pokemonInfo?.height}
      </p>
    </CardStyled>
  );
};
