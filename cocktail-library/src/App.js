import { Component } from 'react';
import Navbar from './layout/Navbar';
import CocktailList from './cocktail/CocktailList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Cocktail Library" />
        <CocktailList />
      </div>
    );
  }
}

export default App;
