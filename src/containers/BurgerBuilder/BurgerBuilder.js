import React, {Component} from "react";
import Aux from '../../hoc/Aux'

class BurgerBuilder extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Aux>
                <div>Build controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;