import { Component } from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import CocktailList from './cocktail/CocktailList';
import axios from 'axios';
import Search from './cocktail/Search';

class App extends Component {
 
  state={
    cocktails: [],
    loading: false
  }

  async componentDidMount() {
    try {
      this.setState({loading: true})
    const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    console.log(res.data);
    this.setState({cocktails: res.data.drinks, loading: false})
    } catch(error) {
      console.log(error)
    }
    
  }

  handleSearchCocktails= async(text) => {
    const res = await axios.get(`https://www.thecocktaildb.com/search/users?q=${text}&api/json/v1/1/search.php?s=`);
    console.log(res.data);
    this.setState({cocktails: res.data.drinks, loading: false})
  }

  render() {
    return (
      <div className="App">
        <Navbar title="Cocktail Library" />
        <div className="container">
        <Search searchCocktails={this.handleSearchCocktails} />
        <CocktailList loading={this.state.loading} cocktails={this.state.cocktails}  />
        </div>
      </div>
    );
  }
}

export default App;
