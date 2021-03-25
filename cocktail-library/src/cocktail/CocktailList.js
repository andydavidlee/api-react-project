import React, { Component } from 'react'

export class CocktailList extends Component {
    state = {
        cocktails: [
            {id: 1,
            strDrink: 'GG',
            strDrinkThumb:"https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg"},
            {id: 2,
            strDrink: 'GG',
            strDrinkThumb:"https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg"},
            {id: 3,
            strDrink: 'GG',
            strDrinkThumb:"https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg"}
        ]
    }
    render() {
        return (
            <div>
                {this.state.cocktails.map(cocktail=>(
                    <div>{cocktail.strDrink}</div>
                ))}
            </div>
        )
    }
}

export default CocktailList
