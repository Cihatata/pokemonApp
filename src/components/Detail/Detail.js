import React from 'react';
import Ability from '../Ability/Ability';
import Stats from '../Card/Stats';
import './detail.css';
const Detail = ({ pokemonData }) => {

  return (
    <article>
      <h2 className="pokemon-header">{pokemonData.name}</h2>
      <div className="article-top">
        <div className="article-img-type">
          <img width="180" src={pokemonData.sprites.other.dream_world.front_default} alt="pokemonProfile" />
          <div className="article-types">
            <h4>Types</h4>
            {pokemonData.types.map((type, index) => {
              return (
                <div key={index} className="pokemon-type">{type.type.name}</div>
              )
            })}</div>
        </div>
        <div className="article-stats">
          <h4>Stats</h4>
          <div className="pokemon-stats">
            {pokemonData.stats.map((stat, index) =>
              <Stats stat={stat} key={index} />
            )}
          </div>
        </div>
        <div className="article-ability">
          <h4>Abilites</h4>
          {pokemonData.abilities.map((data, index) => {
            return <Ability key={index} ability={data.ability} />
          })}
        </div>
      </div>
      <div className="article-move">
        <h4>Moves</h4>
        <div className="move-container">
          {pokemonData.moves.map((move, index) => {
            return (
              <div className="pokemon-move" key={index}>{move.move.name}</div>
            )
          })}
        </div>
      </div>
    </article>
  )
}

export default Detail;