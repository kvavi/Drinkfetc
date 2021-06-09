import React, {useEffect, useState} from "react"
import {URL} from '../data'
import Loading from "./Loading";
import Ingredient from "./Ingredient";

const Ingredients = () => {

    const [ ingredients, setIngredients] = useState(null)
    const [error, setError] = useState(false)

    const renderIngredients = () => {
        if ( !ingredients ) return (<Loading />);
        return ingredients.map(ingredient => (<Ingredient key={ingredient.strIngredient1}  ingredient={ingredient} />))
    }

    useEffect(() => {
        fetch(`${URL}list.php?i=list`)
            .then(response => response.json())
            .then(data => {
                setIngredients( data.drinks )
            })
            .catch(error => {
                setError( error.message )
            })
    }, []);


    return (
        <div className="row">
            {renderIngredients()}
        </div>
    )
}

export default Ingredients