export interface IPokemonBasic {
  name: string;
  url: string;
}

export interface IFetchPokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: IPokemonBasic[];
}

export interface IPokemonInfo {
  base_experience: number;
  weight: number;
  height: number;
  sprites: {
    other: {
      dream_world: {
        // Pokemon image
        front_default: string;
      };
    };
  };
}
