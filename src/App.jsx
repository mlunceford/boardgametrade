import React from 'react';
import './App.scss';
import routes from './routes'
import {Provider} from 'react-redux'
import {HashRouter, withRouter} from 'react-router-dom'
import store from './ducks/store'
import Nav from './components/Nav';


class App extends React.Component{
    constructor(props){
        super(props)
        this.state ={

        }
    }
    render(){
        console.log(this.props)
        return (
            <Provider store={store}>
                <HashRouter>
                    <div className="App">
                        <Nav/>
                        
                        {routes}
                    </div>
                </HashRouter>

            </Provider>
        );
    }
}

export default (App);
