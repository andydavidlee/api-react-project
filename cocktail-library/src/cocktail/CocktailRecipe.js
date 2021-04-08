// Class based component returns the individual recipe of a cocktail.

import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import Spinner from '../layout/Spinner'

class CocktailRecipe extends Component {
    // loads the props that matches the id
    componentDidMount(){
        this.props.getCocktail(this.props.match.params.idDrink);
        // console.log(this.props)
    }
    static propTypes = {
        getCocktail: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
    }

    render() {

        const { drinks } = this.props.cocktailrecipe;
        const { loading } = this.props.loading;

        if (loading) {
            <Spinner />
        }else{
            return (
                <Fragment>
                    <div className="py-1">
                 <Link to="/" className="btn btn-light">Back To Search</Link>
                 </div>
                    <div className="all-center">
                    <div className="large">
                    <h2>{drinks && drinks[0].strDrink }</h2>                    
                    </div>
                    <div className="card grid-2 my-2">
                        <div>
                            <img src={drinks && drinks[0].strDrinkThumb } alt="Cocktail" style={{width:'300px'}}/>
                        </div>
                        <div>
                            <div className="lead">
                            <h3>Ingredients</h3>
                            </div>
                            <p>{drinks && drinks[0].strMeasure1 } {''} {drinks && drinks[0].strIngredient1 }</p>
                            <p>{drinks && drinks[0].strMeasure2 } {''} {drinks && drinks[0].strIngredient2 }</p>
                            <p>{drinks && drinks[0].strMeasure3 } {''} {drinks && drinks[0].strIngredient3 }</p>
                            <p>{drinks && drinks[0].strMeasure4 } {''} {drinks && drinks[0].strIngredient4 }</p>
                            <p>{drinks && drinks[0].strMeasure5 } {''} {drinks && drinks[0].strIngredient5 }</p>                            
                            <p>{drinks && drinks[0].strMeasure6 } {''} {drinks && drinks[0].strIngredient6 }</p>
                            <p>{drinks && drinks[0].strMeasure7 } {''} {drinks && drinks[0].strIngredient7 }</p>
                            <p>{drinks && drinks[0].strMeasure8 } {''} {drinks && drinks[0].strIngredient8 }</p>
                            <p>{drinks && drinks[0].strMeasure9 } {''} {drinks && drinks[0].strIngredient9 }</p>


                        </div>
                    </div>
                    <div className="lead">
                    <h3>Method</h3>
                    </div>
                    <p>{drinks && drinks[0].strInstructions }</p>

                </div>
                 <div className="py-2">
                 <Link to="/" className="btn btn-light">Back To Search</Link>
                 </div>
                </Fragment>
                
            )
        }
    }
}

export default CocktailRecipe
