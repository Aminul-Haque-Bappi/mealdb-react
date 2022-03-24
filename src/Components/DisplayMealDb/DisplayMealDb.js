import React from 'react';
import './DisplayMealDb.css'

const DisplayMealDb = (props) => {
    console.log(props.meal);
    const{strInstructions,strMealThumb,strArea,strMeal,handlecart,idMeal}=props.meal
    console.log(props);
    return (
        <div className='card'>
            <div><img src={strMealThumb} alt="" /></div>
            <button onClick={()=>props.handlecart(props.meal)}>Add to cart</button>
            <h2>{strMeal}</h2>
            <h3>{strArea}</h3>
            <p>{strInstructions}</p>
            
        </div>
    );
};

export default DisplayMealDb;