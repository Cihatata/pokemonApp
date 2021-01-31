import React from 'react';
import Store from './store/index';
import Header from './components/Header/Header';
import Home from './pages/Home';
import PokemonDetail from './pages/PokemonDetail';
import MyPokemons from './pages/MyPokemons';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      {/* Connect Store with useContext */}
      <Store>
        <Header />
        <div className="main">
          <Switch>
            {/* Page Routing */}
            <Route path="/pokemonApp/mypokemons" component={MyPokemons} />
            <Route exact path="/pokemonApp/pokemon/:name" component={PokemonDetail} />
            <Route exact path="/pokemonApp" component={Home} />
          </Switch>
        </div>
      </Store>
    </Router>

  );
}

export default App;
