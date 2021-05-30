import React from 'react'
import "./Recipe.css"


const Recipe = ({title,calories,image, ingredients}) => {
    return(
        <div className="recipe-card">   
            <h1> {title}</h1>
            <ol className="instructions">
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p className="cals"> {calories.toFixed(0)} Calories</p>
            <img src={image} alt=""/>
        </div>
    );
}
export default Recipe;