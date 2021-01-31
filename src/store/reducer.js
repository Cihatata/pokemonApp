export const INITIAL_STATE = {
  myPokemons:[],
  loading: false,
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
    case 'SET_LOADING':
      return {
        ...store,
        loading: action.payload,
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
    // case 'RESET':
    //   return {
    //     ...store,
    //     page: 1,
    //   }
    default:
      return store;
  }
}

export default reducer;