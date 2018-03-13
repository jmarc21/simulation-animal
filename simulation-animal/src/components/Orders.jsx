import React, {Component} from 'react';
import axios from 'axios';

export default class Orders extends Component{
    constructor(){
        super();
        this.state = {
            orders: []
        }
    }
    componentDidMount(){
        axios.get('/api/getUserOrders').then(res => {
            this.setState({
                orders: res.data
            })
        })
    }
    render(){
        let orders = this.state.orders.map((e,i) => {
            return(
                <div key={i}>
                    <div>ordered by {e.username}</div>
                    <h1>{e.animal}</h1>
                </div>
            )
        })
        return(
            <div>
                <h1>Orders:</h1>
                <br/>
                {orders}
            </div>
        )
    }
}