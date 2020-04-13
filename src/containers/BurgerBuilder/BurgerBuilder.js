import React, {Component} from "react";
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burguer'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/OrderSummary/OrderSummary'

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
            totalPrice: 4,
            purchasable: false,
            purchasing: false
        }
    }

    updatedPurchaseState(ingredients){
        const sum = Object.keys(ingredients)
            .map(igKey=>{
            return ingredients[igKey]
        })
            .reduce((sum,el) => {
                return sum + el;
            }, 0);

        this.setState({purchasable: sum > 0});

    };

    purchaseCancelHandler = () => {
        this.setState()
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

        this.setState({ingredients:updatedIngredients, totalPrice:updatedPrice});
        this.updatedPurchaseState(updatedIngredients)

    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const oldPrice = this.state.totalPrice;
        if (oldCount === 0){
            console.log("No ingredients found to be removed!")
        } else {
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;


            const priceDeduction = INGREDIENT_PRICES[type];
            const updatedPrice = oldPrice - priceDeduction;

            this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice})
            this.updatedPurchaseState(updatedIngredients)

        }
    };

    purchaseHandler = () => {
        this.setState({purchasing:true});
    };

    purchaseCancelHandler = () => {
        console.log('sup');
        this.setState({purchasing: false})
    };

    render() {

        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            if (disabledInfo[key] === 0){
                disabledInfo[key] = true
            } else {
                disabledInfo[key] = false
            }
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <Modal modalClosed={this.purchaseCancelHandler} show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <BuildControls
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredientAdded={this.addIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;