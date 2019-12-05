import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'
import AddTrade from './components/AddTrade'
import SaveTrade from './components/SaveTrade'
import Profile from './components/Profile'
import MyTrade from './components/MyTrade'
import DashZoom from './components/DashZoom'

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/addtrade' component={AddTrade}/>
        <Route path='/savetrade' component={SaveTrade}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/mytrade' component={MyTrade}/>
        <Route path='/dashzoom' component={DashZoom}/>
    </Switch>
)

//todo need to add a route at the end of dashboard for dashzoom i would map and use data base to just grab it by trade_item item_id (it an id maybe rename it.)