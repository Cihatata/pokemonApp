import React, { createContext, useReducer } from 'react';
import reducer, { INITIAL_STATE } from './reducer';

export const Context = createContext(INITIAL_STATE);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export default Store;