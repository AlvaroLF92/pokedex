import React from "react";
import { useState } from "react";
import { getPokes } from '../services/getApi'
import './Searchbar.css';

const Searchbar = () => {

  // const {onSearch} = props //to set a value in a function ,you must use braces or it will never be read as a function.

//States

  const [search, setSearch] = useState('ditto')
  const [pokemon, setPokemon] = useState()

 //Functions to modify first state setting the input event on it.

  const onChangeHandler = (e) => {
    setSearch(e.target.value)
  }

  const onButtonClickHandler = () => {
    onSearchHandler(search)
  }

 //Execute api call and set second state with the response into a variable called RESULT

  const onSearchHandler = async (poke) => { 
    const RESULT = await getPokes(poke)
    setPokemon(RESULT)
    
  }
  
  //*Return with a  temporal condition render to test the second state :

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokémon" onChange={onChangeHandler} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div> 
      {pokemon ? (
          <div>
              <div> Nombre: {pokemon.name}</div>
              <div> Peso: {pokemon.weight}</div>
              <div> Tipo: {pokemon.types[0].type.name}</div>
              <img alt="error" src={pokemon.sprites.front_default} />
          </div>
      ) : null }
    </div >
  );
};

export default Searchbar;
