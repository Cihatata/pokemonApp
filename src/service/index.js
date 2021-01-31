import  { API_URL } from '../constant'
import { PER_PAGE } from '../constant';

export const getPokemonsList = async (dispatch, page, searchValue) => {
  const offset = (page === 1) ? 0 : (page * PER_PAGE)
  const URL = (searchValue) ? `${API_URL}/${searchValue}` :  `${API_URL}?offset=${offset}&limit=${PER_PAGE}`
  const res = await fetch(`${URL}`);
  let payload;
  if (res.status === 200) {
    payload = await res.json()
  } else {
    payload = false;
  }
  if (payload) dispatch({type: 'SET_POKEMONS', payload});
};

export const getPokemonData = async (url) => {
  const res = await fetch(url);
  const raw = await res.json();
  return raw;
}