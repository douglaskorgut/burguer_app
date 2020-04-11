import React from "react";
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'
import Aux from '../../hoc/Aux'
import classes from './Burguer.module.css'

const burger = (props) =>{
        return (
            <div className={classes.Burger}>
                <BurgerIngredient type='bread-top'/>
                <BurgerIngredient type='cheese'/>
                <BurgerIngredient type='meat'/>
                <BurgerIngredient type='bread-bottom'/>
            </div>
        )
};
export default burger;