// main app component where all components are passed through

// Imported modules and components
import { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './layout/Navbar';
import CocktailList from './cocktail/CocktailList';
import axios from 'axios';
import Search from './cocktail/Search';
import Alert from './layout/Alert';
import About from './pages/About';
import CocktailRecipe from './cocktail/CocktailRecipe';


class App extends Component {
 
  state={
    cocktails: [],
    cocktailrecipe:{},
    loading: false,
    msg:'',
    type:''
  }

  // Calling the API and putting the information into the state
  async componentDidMount() {
    try {
      this.setState({loading: true})
    const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    this.setState({cocktails: res.data.drinks, loading: false})
    } catch(error) {
      console.log(error)
    }
    
  }

  // Calling certain items from the API based on the name of the cocktail
  handleSearchCocktails= async (text) => {
    try{
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`);
    this.setState({cocktails: res.data.drinks, loading: false})
  } catch(error) {
    console.log(error)
  }
  }

  // Get single cocktail recipe
  getCocktail = async (idDrink) => {
    try {
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`);
    this.setState({cocktailrecipe: res.data, loading: false})
  } catch(error) {
    console.log(error)
  }
  }

  // clears the search bar once a query has been made
  handleClearCocktails= () => {
    this.setState({cocktails:[], loading: false})
  }

  // An alert message if the search bar is empty
  handleSetAlert=(msgfromSearch, typefromSearch)=>{
    this.setState({ msg:msgfromSearch, type:typefromSearch })
    setTimeout(()=>this.setState({msg:'', type:''}), 5000)
  }

  render() {
    const {cocktails, loading, cocktailrecipe} = this.state;
    return (
      // Routes and components
      <Router>
        <div className="App">
          <Navbar title="COCKTAIL LIBRARY" />
          <div className="container">
          <Alert msg={this.state.msg} type={this.state.type} />
          <Switch>
            <Route exact path='/' render={props=>(
              <Fragment>
                <Search searchCocktails={this.handleSearchCocktails} clearCocktails={this.handleClearCocktails} showClear={this.state.cocktails.length>0?true:false} setAlert={this.handleSetAlert} />
                <CocktailList loading={loading} cocktails={cocktails}  />
              </Fragment>
            )} />
            <Route exact path='/about' component={About} />
            <Route exact path='/cocktailRecipe/:idDrink' render={props => (
              <CocktailRecipe {...props} getCocktail={this.getCocktail} cocktailrecipe={cocktailrecipe} loading={loading}/>
            )} />
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
