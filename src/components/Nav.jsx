import React from 'react'
import './Nav.scss'
import {HashRouter, withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'


class Nav extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div >  
                {this.props.location.pathname === '/' ? null : 
                (
                    <div className="Nav">
                        <Link to='/dashboard'>
                        <img className='navImg' src="https://static.thenounproject.com/png/138946-200.png" alt="boardgameicon"/>
                        </Link>
                        <Link to='/addtrade'>
                        <button>+Trade</button>
                        </Link>
                        <Link to='/interested'>
                        <button>Saved</button>
                        </Link>
                        <Link to='/mytrade'>
                        <button>My Trade</button>
                        </Link>
                        <Link to='/profile'><button>profile</button></Link>
                        <Link to='/'> <button>logout</button></Link>

                </div>

                )}
            </div>
        )
    }
}
export default withRouter(Nav);