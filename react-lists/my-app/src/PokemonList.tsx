type Props = {
  pokedex: Pokedex[];
};

type Pokedex = {
  number: string;
  name: string;
};

export function PokemonList({ pokedex }: Props) {
  const listItems = pokedex.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));

  return <ul>{listItems}</ul>;
}
