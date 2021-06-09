import React, {Fragment, useState} from "react"
import Ingredients from "./Ingredients";
import Drinks from "./Drinks";

export const ingredientContext = React.createContext();

const App = () => {

    const [ingredient, setIngredient] = useState(null)

    const changeIngredient= (data) => {
        setIngredient( data )
    }

    const renderDrinks = () => {
        if (ingredient)  {
            return (
                <section className="container">
                    <Drinks ingredient={ingredient} />
                </section>
            )
        }
    }

    return (
        <Fragment>
            <ingredientContext.Provider value={{changeIngredient}}>
                <section className="container my-5">
                    <Ingredients />
                </section>
            </ingredientContext.Provider>
            { renderDrinks() }
        </Fragment>
    )
}

export default App