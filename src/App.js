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
      <Store>
        <Header />
        <div className="main">
          <Switch>
            <Route path="/mypokemons" component={MyPokemons} />
            <Route exact path="/pokemon/:name" component={PokemonDetail} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Store>
    </Router>

  );
}

export default App;
