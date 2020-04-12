import React, {Component} from "react";
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burguer'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4
        }
    }

    addIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        let updatedPrice = this.state.totalPrice;

        switch (type){
            case 'salad':
                updatedPrice = updatedPrice + INGREDIENT_PRICES.salad;
                break;
            case 'meat':
                updatedPrice = updatedPrice + INGREDIENT_PRICES.meat;
                break;
            case 'cheese':
                updatedPrice = updatedPrice + INGREDIENT_PRICES.cheese;
                break;
            case 'bacon':
                updatedPrice = updatedPrice + INGREDIENT_PRICES.bacon;
                break;
            default:
                break;
        }

        this.setState({ingredients:updatedIngredients, totalPrice:updatedPrice})

    };

    removeIngredientHandler = (type) => {

    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                {this.state.totalPrice}
                <BuildControls ingredientAdded={this.addIngredientHandler}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;