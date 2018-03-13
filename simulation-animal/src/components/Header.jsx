import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component{
    render(){
        return(
            <div>
                <Link to='/browsing'><div>browse</div></Link>
                <Link to='/cart'><div>cart</div></Link>
                <Link to='/orders'><div>orders</div></Link>
            </div>
        )
    }
}