import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemons, setPokemons] = useState([]);
  const [searchedItem, setSearchedItem] = useState("");
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(r => r.json())
      .then(data => setPokemons(data))
  }, [])

  function handleSearch(item) {
    setSearchedItem(item)
  }

  function handleAddPokemon(newPokemon){
    setPokemons([...pokemons, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search onSearch={handleSearch} searchedItem={searchedItem} />
      <br />
      <PokemonCollection pokemons={pokemons} searchedItem={searchedItem} />
    </Container>
  );
}

export default PokemonPage;
