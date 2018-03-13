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
    render(){
        let mappedCart = this.state.cart.map((e,i) => {
            return(
                <div key={i}>
                    <h1>added by {e.username}</h1>
                    <h1>{e.animal}</h1>
                </div>
            )
        })
        return(
            <div>
                <Header/>
                {mappedCart}
                <button>Checkout</button>
            </div>
        )
    }
}