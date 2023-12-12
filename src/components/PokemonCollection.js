import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons, searchedItem }) {
  const newPokemon = pokemons
    .filter((pokemon) => {
      if (searchedItem === "") {
        return true
      }
      return pokemon.name.toLowerCase().includes(searchedItem.toLowerCase())
    })
    .map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {newPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
