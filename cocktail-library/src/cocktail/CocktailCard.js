// Function based component which is the layout of the individual cockatail cards for the grid

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const CocktailCard= ({cocktail: {strDrink, strDrinkThumb, idDrink}}) => {
        return (
            <div className='card text-center'>
                <div className="card-inner">
                    <div className="card-front">
                        <img style={{width: '250px'}} src={strDrinkThumb} alt="avatar"/>
                    </div>
                    <div className="card-back py-2">
                        <h2>{strDrink}</h2>
                        <p className="py-1">Get ready to wow the crowd at your next cocktail party.</p>
                        <Link to={`/cocktailRecipe/${idDrink}`} className='btn btn-light btn-sm py-1'>Method</Link>
                    </div>
                </div>
            </div>
        )
}

CocktailCard.propTypes = {
    cocktail: PropTypes.object.isRequired,
}

export default CocktailCard
