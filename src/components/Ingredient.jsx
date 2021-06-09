import React, {useContext}  from 'react'
import {ingredientContext} from "./App"

const Ingredient = ({ingredient}) => {
    const cntx = useContext(ingredientContext);
    return (
        <div className="col-6 col-sm-4 col-md-3">
            <button
                type="button"
                onClick={
                    () => {
                        cntx.changeIngredient(ingredient.strIngredient1)
                    }
                }
                className="btn btn-outline-success my-1 w-100"
            >{ingredient.strIngredient1}</button>
        </div>
    )
  }

export default Ingredient