import React, {Component} from "react";
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burguer'

class BurgerBuilder extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Aux>
                <Burger/>
                <div>Build controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;