import React from 'react';
import CocktailCard from './CocktailCard';
import Spinner from '../layout/Spinner';

const CocktailList = ({ cocktails, loading }) => {

        if(loading){
            return <Spinner />
        }else{
            return (
                <div className="cards">
                    {cocktails.map(cocktail => (
                        <CocktailCard key={cocktail.id} cocktail={cocktail} />
                    ))}
                </div>
            )
        }   
    }
    

export default CocktailList
