import React from "react";
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const buildControls = (props) => {

    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' }
    ];

    return (
        <div className={classes.BuildControls}>
            <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
            <div>
            {controls.map((control) => {
                return <BuildControl
                    removed={()=> props.ingredientRemoved(control.type)}
                    added={() => {props.ingredientAdded(control.type)}}
                    key={control.type}
                    label={control.label}
                    disabled={props.disabled[control.type]}
                />
            })}
            </div>
        </div>
    )
};

export default buildControls;