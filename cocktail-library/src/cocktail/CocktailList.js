// Function component that lays the cockatail grid out on the home page

import React from 'react';
import CocktailCard from './CocktailCard';
import Spinner from '../layout/Spinner';

const CocktailList = ({ cocktails, loading }) => {

        if(loading){
            return <Spinner />
        }else{
            return (
                <div className="cards py-1">
                    {cocktails.map(cocktail => (
                        <CocktailCard key={cocktail.id} cocktail={cocktail} />
                    ))}
                </div>
            )
        }   
    }
    

export default CocktailList
