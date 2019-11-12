import React from 'react'
import './Nav.scss'
import { withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'


class Nav extends React.Component {
    constructor(props){
        super(props)
        this.dropdown = React.createRef();
        this.state = {

        }
    }
    toggleShow = () => {
        let { current } = this.dropdown;
        if (current.classList.contains("show-animation")) {
          current.classList.add("hide-animation");
          current.classList.remove("show-animation");
        } else {
          current.classList.remove("hide-dropdown");
          current.classList.add("show-animation");
          current.classList.remove("hide-animation");
        }
      };

    render(){
        return(
            <div>  
                {this.props.location.pathname === '/' ? null : 
                (  
                    <div className="Nav">
                        <div className="linkbox">
                            <Link to='/dashboard'>
                                <img className='navImg' src="https://static.thenounproject.com/png/138946-200.png" alt="boardgameicon"/>
                            </Link>
                            <h1>Board Game Trade</h1>
                            <Link to='/addtrade'>
                                <button>Add Trade</button>
                            </Link>
                            <Link to='/savetrade'>
                                <button>Saved Trades</button>
                            </Link>
                            <Link to='/mytrade'>
                                <button>My Trades</button>
                            </Link>
                            <Link to='/profile'>
                                <button>Profile</button>
                            </Link>
                            <Link to='/'>
                                <img className='navImg' src="https://icon-library.net/images/end-icon/end-icon-12.jpg" alt="logout"/>
                            </Link>
                        </div>

                        <Link to='/dashboard'><img className='navImg hamBar' src="https://static.thenounproject.com/png/138946-200.png" alt="boardgameicon"/></Link>
                        <h1 className='hamBar'>Board Game Trade</h1>
                        <img className='navImg hamBar' onClick={this.toggleShow} src="https://icon-library.net/images/hamburger-icon/hamburger-icon-17.jpg" alt="hamburgericon"/>
                        
                        
                        {/* phonable dropdown down here */}
                        <div className="dropdown hide-dropdown" ref={this.dropdown}>
                            <Link to='Dashboard'><div className="dropdown-links">Dashboard</div> </Link>
                            <Link to='/profile'>
                                <div className="dropdown-links">Profile</div>
                            </Link>
                            <Link to='/addtrade'><div className="dropdown-links">Add Trade</div></Link>
                            <Link to='/mytrade'><div className="dropdown-links">My Trades</div></Link>
                            <Link to='/savetrade'><div className="dropdown-links">Saved Trades</div></Link>
                            <Link to='/'><div className="dropdown-links">Logout</div></Link>
                        </div>
                    </div>
                )}
            </div>

        )
    }
}
export default withRouter(Nav);