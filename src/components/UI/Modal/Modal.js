import React from "react";
import classes from './Modal.module.css'
import Aux from '../../../hoc/Aux'
import Backdrop from '../../../components/UI/Backdrop/Backdrop'

const modal = (props) => {

    const styles = {
        transform: props.show ? 'translateY(0)' : 'translateY(100)',
        opacity: props.show ? '1' : '0'
    };

    return (
        <Aux>
            <Backdrop clicked={props.modalClosed} show={props.show}/>
            <div style={styles} className={classes.Modal}>{props.children}</div>
        </Aux>
    )
};

export default modal;