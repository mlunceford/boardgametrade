import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'
import AddTrade from './components/AddTrade'
import Interested from './components/Interested'
import Profile from './components/Profile'
import MyTrade from './components/MyTrade'
import DashZoom from './components/DashZoom'

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/addtrade' component={AddTrade}/>
        <Route path='/interested' component={Interested}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/mytrade' component={MyTrade}/>
        <Route path= '/dashzoom' component={DashZoom}/>
    </Switch>
)

//todo need to add a route at the end of dashboard for dashzoom