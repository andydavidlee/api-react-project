import React, { Component } from 'react'

class CocktailCard extends Component {
    state = {
        id: 1,
        strDrink: 'GG',
        strDrinkThumb:"https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg"

    }
    render() {
        const {strDrink, strDrinkThumb} = this.state;
        return (
            <div className='card text-center'>
                <img style={{width: '300px'}} src={strDrinkThumb} alt="avartar"/>
                <h2>{strDrink}</h2>
                <a href="www.face.com" className='btn btn-dark btn-sm my-1'>Method</a>
            </div>
        )
    }
}

export default CocktailCard
