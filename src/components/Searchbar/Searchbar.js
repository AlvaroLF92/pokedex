import React from "react";
import { useState } from "react";
import { getPokes } from '../../services/getApi'
import './Searchbar.css';

const Searchbar = () => {

  // const {onSearch} = props //to set a value in a function ,you must use braces or it will never be read as a function.

  //States

  // const [search, setSearch] = useState()
  const [pokemon, setPokemon] = useState()
  let search;

  //Functions to modify first state setting the input event on it.

  const onChangeHandler = (e) => {
    search = e.target.value;
  }

  const onButtonClickHandler = () => {
    onSearchHandler(search)
  }

  const onKeyEnter = (e) => {
    if (e.keyCode === 13) {
      onButtonClickHandler()
    }
  }

  //Execute api call and set second state with the response into a variable called RESULT

  const onSearchHandler = async (poke) => {
    const RESULT = await getPokes(poke)
    setPokemon(RESULT)
  }

  // Set data values

  const getTypes = () => {
    let types = '';

    pokemon.types.forEach((typeObj, index) => {
      types += pokemon.types.length === 1 || (pokemon.types.length > 1 && pokemon.types.length - 1 === index) ?
        `${typeObj.type.name}`
        : `${typeObj.type.name} / `
    })

    return types;
  }

  //*Return with a  temporal condition render to test the second state :

  return (
    <div className="searchbar_container">
      <input className="searchbar" placeholder="Buscar pokémon" onChange={onChangeHandler} onKeyDown={(event) => onKeyEnter(event)} />
      <button className="searchbar_btn" onClick={onButtonClickHandler}>Buscar</button>
      {pokemon && (
        <React.Fragment>
           Nombre: {pokemon.name}<br/>
           Peso: {pokemon.weight}<br/>
           Tipo: {getTypes()}<br/>
          <img alt="error" src={pokemon.sprites.front_default} />
        </React.Fragment>
      )}
    </div >
  );
};

export default Searchbar;
