import React from 'react';
import CocktailCard from './CocktailCard';
import Spinner from '../layout/Spinner';

const CocktailList = ({ cocktails, loading }) => {
    // state = {
    //     cocktails: [
    //         {id: 1,
    //         strDrink: 'GG',
    //         strDrinkThumb:"https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg"},
    //         {id: 2,
    //         strDrink: 'Mojito',
    //         strDrinkThumb:"https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg"},
    //         {id: 3,
    //         strDrink: 'Martini',
    //         strDrinkThumb:"https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg"}
    //     ]
    // }
    
        // const { cocktails, loading } = this.props;
        if(loading){
            return <Spinner />
        }else{
            return (
                <div style={gridLayout}>
                    {cocktails.map(cocktail => (
                        <CocktailCard key={cocktail.id} cocktail={cocktail} />
                    ))}
                </div>
            )
        }   
    }

const gridLayout = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default CocktailList
