import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackToHome from '../components/BackToHome/BackToHome';
import { getPokemonData } from '../service';
import { API_URL } from '../constant';
import Detail from '../components/Detail/Detail';

const PokemonDetail = () => {
  const params = useParams();
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    getPokemonData(`${API_URL}/${params.name}`)
    .then((res) => setPokemonData(res));
  },[params])

  return (
    <section>
      <BackToHome />
      {pokemonData 
      ? <Detail pokemonData={pokemonData} />
      : <div>Loading</div>
    }
    </section>
  );
}

export default PokemonDetail;