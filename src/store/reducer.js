export const INITIAL_STATE = {
  myPokemons:[],
  pokemons: [],
  totalPokemons: 0,
  page: 1
}

const reducer = (store = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_POKEMONS':
      return {
        ...store,
        pokemons: action.payload.results || [action.payload],
        totalPokemons: action.payload.count || 1,
      }
    case 'ADD_MY_POKEMONS':
      return {
        ...store,
        myPokemons: action.payload,
      }
    case 'REMOVE_MY_POKEMONS':
      return {
        ...store,
        myPokemons: action.payload,
      }
    case 'SET_PAGE':
      return {
        ...store,
        page: action.payload
      }

    default:
      return store;
  }
}

export default reducer;