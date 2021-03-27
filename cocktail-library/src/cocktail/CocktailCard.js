import React from 'react'
import PropTypes from 'prop-types'


const CocktailCard= ({cocktail: {strDrink, strDrinkThumb}}) => {
        return (
            <div className='card text-center'>
                <img style={{width: '300px'}} src={strDrinkThumb} alt="avatar"/>
                <h2>{strDrink}</h2>
                {/* <a href="www.face.com" className='btn btn-dark btn-sm my-1'>Method</a> */}
            </div>
        )
}

CocktailCard.propTypes = {
    cocktail: PropTypes.object.isRequired,
}

export default CocktailCard
