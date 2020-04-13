import React from "react";
import Aux from '../../hoc/Aux'

const orderSummary = (props) => {
    const ingredientsSummary = props.ingredients;

    let transformedIngredients = Object.keys(ingredientsSummary)
        .map((ingredientKey, index) => {
            return <li key={ingredientKey+index}> {capitalize(ingredientKey)}: {props.ingredients[ingredientKey]}</li>
        },[]);

    return (
        <Aux>
            <h3>Your order</h3>
            <p>Built burguer:</p>
            <ul>
                {transformedIngredients}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    );
};

const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1)
};

export default orderSummary;