import React from "react";
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'
import Aux from '../../hoc/Aux'
import classes from './Burguer.module.css'

const burger = (props) =>{

        // Convert object to key value pairs
        let transformedIngredients = Object.keys(props.ingredients)

            // Convert key-value pair in burger ingredients
            .map(igKey => {
                    return [...Array(props.ingredients[igKey])].map((_,index) => {
                            return <BurgerIngredient key={igKey + index} type={igKey} />
                    });
            }).reduce( (arr, el) => {
                    return arr.concat(el)
            },[]);

        if (transformedIngredients.length === 0){transformedIngredients = <p>Please start adding ingredients;</p>};

        return (
            <div className={classes.Burger}>
                <BurgerIngredient type='bread-top'/>
                    {transformedIngredients}
                <BurgerIngredient type='bread-bottom'/>
            </div>
        )
};
export default burger;