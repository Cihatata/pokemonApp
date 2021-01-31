import React, { useContext } from 'react';
import Card from '../components/Card/Card';
import BackToHome from '../components/BackToHome/BackToHome'
import { Context } from '../store';
import { API_URL } from '../constant';

// Render My Pokemons List 
const MyPokemons = () => {
  const [state, dispatch] = useContext(Context);
  const { myPokemons } = state;
  return (
    <main>
      <BackToHome />
      <h2>My Pokemons</h2>
      <section className="cards-wrapper">
        {(myPokemons.length > 0)
          ? myPokemons.map((pokemon, index) => {
            return <Card key={index} url={`${API_URL}/${pokemon.name}`} />
          })
          : <div>No pokemon has been added yet</div>
        }
      </section>
    </main>
  )
}

export default MyPokemons;