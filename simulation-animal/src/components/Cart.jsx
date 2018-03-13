import React, {Component} from 'react';
import axios from 'axios';
import Header from './Header';

export default class Cart extends Component{
    constructor(){
        super();
        this.state = {
            cart: []
        }
    }
    componentDidMount(){
        axios.get('/api/getUsersCart').then(res => {
            this.setState({
                cart: res.data
            })
        })
    }
    makeOrder(){
        var order = this.state.cart[0]

        axios.post('/api/makeOrder', order).then(res => {
            console.log(res)
        })
    }
    render(){
        let mappedCart = this.state.cart.map((e,i) => {
            return(
                <div key={i}>
                    <br/>
                    <div>added by {e.username}</div>
                    <h1>{e.animal}</h1>
                </div>
            )
        })
        return(
            <div>
                <Header/>
                {mappedCart}
                <button onClick={() => this.makeOrder()}>Checkout</button>
            </div>
        )
    }
}