import React from 'react';
import './App.css';

import Home from './pages/Home';
import PokemonsResults from './pages/PokemonsResults';
import { Route, Switch, Redirect } from "react-router-dom";
import Detail from './pages/Detail';
import Header from './components/header/header';
import Legendaries from 'pages/Legendaries';
import Favorites from 'pages/Favorites';
import Footer from 'components/footer/footer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/pokemons' component={PokemonsResults} />
        <Route path='/detail/:poke' component={Detail} />
        <Route path='/legendaries' component={Legendaries} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/about' component={Home} />
        <Redirect to='/home' />
      </Switch>

      {/*<Footer />*/}
    </div>
  );
}

export default App;
