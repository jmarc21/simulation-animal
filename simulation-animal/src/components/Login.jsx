import React, {Component} from 'react';
import logo from '../assets/pm-petmeet.png';
import axios from 'axios';

export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }
    }
    updateUsername(val){
        this.setState({
            username: val
        })
    }
    updatePass(val){
        this.setState({
            password: val
        })
    }
    loginUser(){
        var user = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('/api/register-user', user ).then(res => {
            if(res.data === 'User Registered'){
                window.location = '/#/browsing'
            }
        })
    }
    render(){
        return(
            <div>
                <div className="LoginLogo">
                    <img src={logo} alt=""/>
                </div>
                <div className="loginCreds">
                    <input type="text" placeholder='new name' onChange={ e => this.updateUsername(e.target.value)}/>
                    <input type="text" placeholder='new url' onChange={ e => this.updatePass(e.target.value)}/>
                    <button className='loginButton' onClick={() => this.loginUser()}>Login</button>
                </div>
            </div>
        )
    }
}