// Class based component returns the individual recipe of a cocktail.

import React, { Component, Fragment } from 'react'
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
        const {strDrink} = this.props.cocktailrecipe;
        // const [strDrink] = this.props.cocktailrecipe;
        // console.log(strDrink);
        // console.log(this.props.cocktailrecipe);
        // const {loading} = this.props.loading;
        // if (loading) {
        //     <Spinner />
        // }else{
            return (
                <Fragment>
            <h3>{strDrink}</h3>
                    <h3>This is the title</h3>
                </Fragment>
            )
    //     }
    }
}

export default CocktailRecipe
