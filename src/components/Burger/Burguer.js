import React from "react";
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'
import Aux from '../../hoc/Aux'

const burger = (props) =>{
        return (
            <Aux>
                <BurgerIngredient/>
                <BurgerIngredient/>
            </Aux>
        )
};
export default burger;