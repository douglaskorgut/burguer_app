import React from "react";
import Aux from '../../hoc/Aux'
import Button from '../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientsSummary = props.ingredients;

    let transformedIngredients = Object.keys(ingredientsSummary)
        .map((ingredientKey, index) => {
            return <li key={ingredientKey+index}> {capitalize(ingredientKey)}: {props.ingredients[ingredientKey]}</li>
        },[]);

    return (
        <Aux>
            <h3>Your order</h3>
            <p>Built burger:</p>
            <ul>
                {transformedIngredients}
            </ul>
            <p><strong> Total price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1)
};

export default orderSummary;