import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'

const CheckoutSummery = (props) => {
    return (
        <div className={classes.CheckoutSummery}>
            <h1 style={{textAlign: 'center'}}>We hope it tastes well!</h1>
            <div style={{width: '100%', height: '300px', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <div style={{textAlign: 'center'}}>
                <Button 
                    btnType="Danger"
                    clicked={props.checkoutCancelled}>CANCEL</Button>
                <Button 
                    btnType="Success"
                    clicked={props.checkoutContinued}>CONTINUE</Button>
            </div>
        </div>
    )
}

export default CheckoutSummery