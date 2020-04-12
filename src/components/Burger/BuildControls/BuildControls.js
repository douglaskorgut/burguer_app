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
            <div>
            {controls.map((control) => {
                return <BuildControl key={control.type} label={control.label}/>;
            })}
            </div>
        </div>
    )
};

export default buildControls;