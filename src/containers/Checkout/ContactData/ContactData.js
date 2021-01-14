import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../hoc/axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner'

export default class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderhandler = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Stefan',
                address: {
                    street: "Some street 1",
                    zipCode: '31211',
                    country: 'Serbia'
                },
                email: 'test@test.com',
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                // console.log(response);
                this.setState({
                    loading: false
                })
                this.props.history.push('/')
            })
            .catch(error => {
                // console.log(error);
                this.setState({
                    loading: false
                })
            })
    }

    render() {
        let form = (
            <form className={classes.ContactData}>
            <input type="text" name="name" placeholder="Your Name"/>
            <input type="email" name="email" placeholder="Email"/>
            <input type="text" name="street" placeholder="Street"/>
            <input type="text" name="postal" placeholder="Postal Code"/>
            <Button clicked={this.orderhandler} btnType="Success">Order</Button>
        </form>
        );
        if(this.state.loading) {
            form = <Spinner />
        }
        return (
            <div>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}
