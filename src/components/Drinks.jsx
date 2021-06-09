import React, {useEffect, useState} from 'react'
import Loading from "./Loading"
import Error from "./Error"
import Drink from "./Drink"

import {URL} from "../data"

const Drinks = ({ingredient}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [drinks, setDrinks] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsLoading( true )
        setTimeout( () => {
            fetch(`${URL}filter.php?i=${ingredient}`)
                .then(response => response.json())
                .then(data => {
                    setDrinks( data.drinks )
                    setIsLoading( false )
                })
                .catch(error => {
                    setError( error.message )
                })
        }, 1000 )
    }, [ingredient]);



    const renderDrinks = () => {
        if (isLoading && !error) {
            return (<Loading />)
        } else if (error) {
            return (<Error message={error} />)
        } else
            return (drinks.map((drink) => (<Drink key={drink.idDrink} drink={drink}/>)))
    }

    return (
        <div className="container">
            <div className="row">
                {renderDrinks()}
            </div>
        </div>
    )
}

export default Drinks