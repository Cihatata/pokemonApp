import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getPokemonData } from '../../service';
import { Context } from '../../store'
import Stats from './Stats';
import './card.css';
import Loading from '../Loading/Loading';

const Card = ({ url }) => {
  const [state, dispatch] = useContext(Context);
  const [pokemonData, setPokemonData] = useState();
  const { myPokemons } = state;
  const history = useHistory();

  // is pokemon on the list
  const isThereMyPokemons = () => {
    const bool = myPokemons.some((item) => item.id === pokemonData.id);
    return bool;
  }

  //remove from My List
  const removeMyPokemons = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    const prevMyPokemons = myPokemons;
    const index = prevMyPokemons.findIndex((pokemon) => pokemon.id === pokemonData.id)
    prevMyPokemons.splice(index, 1) //Mutable //Remove from Array
    dispatch({type: 'REMOVE_MY_POKEMONS', payload: prevMyPokemons});
  }

  // Redirect to Pokemon Detail
  const redirect = (e) => {
    history.push(`/pokemonApp/pokemon/${pokemonData.name}`)
  }

  // Add to My List
  const addMyPokemons = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    const prevMyPokemons = myPokemons;
    prevMyPokemons.push(pokemonData);
    dispatch({ type: 'ADD_MY_POKEMONS', payload: prevMyPokemons });
  }
  useEffect(() => {
    // Fetch
    getPokemonData(url)
      .then((res) => setPokemonData(res));
  }, [url])

  return (pokemonData) ?
    (
      <article onClick={redirect} className="card">
        <img src={pokemonData.sprites.front_default} alt="pokemonImage" />
        <div className="card-bottom">
          <div className="pokemon-name">{pokemonData.name}</div>
          <div className="pokemon-stats">
            {pokemonData.stats.map((stat, index) => 
                <Stats stat={stat} key={index} />    
            )}
          </div>
        </div>
        {(isThereMyPokemons())
          ? <button onClick={removeMyPokemons} className="button rmv-btn">Remove My Pokemons</button>
          : <button onClick={addMyPokemons} className="button add-btn">Add My Pokemons</button>
        }
      </article>
    ) : (
      <Loading />
    )
}

export default Card;