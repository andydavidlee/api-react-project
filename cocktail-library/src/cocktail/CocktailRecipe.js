// Class based component returns the individual recipe of a cocktail.

import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

// import Spinner from '../layout/Spinner'

class CocktailRecipe extends Component {
    componentDidMount(){
        this.props.getCocktail(this.props.match.params.idDrink);
        // console.log(this.props.match.params.idDrink)
    }
    static propTypes = {
        getCocktail: PropTypes.func.isRequired,
    }

    render() {
        // const {strDrink} = this.props.cocktailrecipe;
        // const [strDrink] = this.props.cocktailrecipe;
        // console.log(strDrink);
        // console.log(this.props.cocktailrecipe);
        // const {loading} = this.props.loading;
        // if (loading) {
        //     <Spinner />
        // }else{
            return (
                <Fragment>
                    <div className="py-1">
                 <Link to="/" className="btn btn-light">Back To Search</Link>
                 </div>
                    <div className="all-center">
                    <div>
                        <h2>Recipe Title</h2>
                    </div>
                    <div className="card grid-2 my-2">
                        <div>
                            <img src="https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg" alt="Cocktail" style={{width:'300px'}}/>
                        </div>
                        <div>
                            <h3>Ingredients</h3>
                            <p>Measure + Ingredient 1</p>
                            <p>Measure + Ingredient 2</p>
                            <p>Measure + Ingredient 3</p>
                        </div>
                    </div>
                    <h3>Method</h3>
                    <p>Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.</p>

                </div>
                 <div className="py-2">
                 <Link to="/" className="btn btn-light">Back To Search</Link>
                 </div>
                </Fragment>
                
            )
    //     }
    }
}

export default CocktailRecipe
