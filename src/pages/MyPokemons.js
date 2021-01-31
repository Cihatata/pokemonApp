import React, { useContext } from 'react';
import Card from '../components/Card/Card';
import BackToHome from '../components/BackToHome/BackToHome'
import { Context } from '../store';
import { API_URL } from '../constant';

const MyPokemons = () => {
  const [state, dispatch] = useContext(Context);
  const { myPokemons } = state;
  return (
    <main>
      <BackToHome />
      <h2>My Pokemons</h2>
      <section className="cards-wrapper">
        {myPokemons.map((pokemon, index) => {
          return <Card key={index} url={`${API_URL}/${pokemon.name}`} />
        })}
      </section>
    </main>
  )
}

export default MyPokemons;