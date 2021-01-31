import React from 'react';
import { useHistory } from 'react-router-dom';
import './header.css';

const Header = () => {
  const history = useHistory();
  console.log(history);
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          PokeDex
          {/* <img src="pokeball.gif" alt="pokeball" width="48" /> */}
        </div>
        <button onClick={() => history.push('/mypokemons')} className="button">My Pokemons</button>
      </nav>
    </header>
  )
}

export default Header;