import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackToHome from '../components/BackToHome/BackToHome';
import { getPokemonData } from '../service';
import { API_URL } from '../constant';
import Detail from '../components/Detail/Detail';
import Loading from '../components/Loading/Loading';

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
      : <Loading />
    }
    </section>
  );
}

export default PokemonDetail;