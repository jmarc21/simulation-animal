import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Browsing from './components/Browsing';
import Details from './components/Details';
import Cart from './components/Cart';
import Orders from './components/Orders';
import EditPet from './components/EditPet';
import AddPets from './components/AddPet';

export default (
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/browsing' component={Browsing}/>
        <Route path='/details' component={Details}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/orders' component={Orders}/>
        <Route path='/editpet' component={EditPet}/>
        <Route path='/addpet' component={AddPets}/>
    </Switch>
)