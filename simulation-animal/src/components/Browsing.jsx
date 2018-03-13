import React, {Component} from 'react';
import axios from 'axios';
import Header from './Header';

export default class Browsing extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    addToCart(animal){
        var animal = { animal: animal}
        axios.post('/api/add-animal', animal).then(res => {
            console.log(res)
        })
    }
    render(){
        return(
            <div>
                <Header/>
                <div className="animals">
                    <h3>lizard</h3>
                    <button onClick={() => this.addToCart('Lizard')}>Adopt Pet</button>
                    <br/>
                    <h3>Dog</h3>
                    <button onClick={() => this.addToCart('Dog')}>Adopt Pet</button>
                    <br/>
                    <h3>Elephant</h3>
                    <button onClick={() => this.addToCart('Elephant')}>Adopt Pet</button>
                    <br/>
                    <h3>Falcon</h3>
                    <button onClick={() => this.addToCart('Falcon')}>Adopt Pet</button>
                    <br/>
                    <h3>Snake</h3>
                    <button onClick={() => this.addToCart('Snake')}>Adopt Pet</button>
                    <br/>
                    <h3>Heron</h3>
                    <button onClick={() => this.addToCart('Heron')}>Adopt Pet</button>
                    <br/>
                    <h3>Frog</h3>
                    <button onClick={() => this.addToCart('Frog')}>Adopt Pet</button>
                    <br/>
                    <h3>Beaver</h3>
                    <button onClick={() => this.addToCart('Beaver')}>Adopt Pet</button>
                    <br/>
                </div>
            </div>
        )
    }
}