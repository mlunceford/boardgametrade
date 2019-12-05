import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from '../ducks/reducer'


class Auth extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    handleRegister = () => {
        // console.log(this.state.username, this.state.password) 
        // alert('Username already exists')
        axios.post('/auth/register', {
            username: this.state.username,
            password: this.state.password
        }).then(res => { console.log('hit register')
            this.props.updateUser(res.data);
            this.props.history.push('/profile');
            this.setState({ //this is setting htem back to blank even tho wer going to dashboard.
                username: '',
                password: ''
            })
            
        })
        .catch(err => console.log(err, alert(`${this.state.username} already exists`)),
        this.setState({
            username: '',
            password: ''
        })
        )  // this took forever to understand so sad.
    
    }
    handleLogin = () => {
        axios.post("/auth/login", {
          username: this.state.username,
          password: this.state.password
        }).then(res => { //console.log('hit login')
            this.setState({
                username: "",
                password: ""
            });
            this.props.updateUser(res.data);
            this.props.history.push("/dashboard");
        
        })
        .catch(err => console.log(err, alert(`Username: ${this.state.username}Password Incorrect`)),
        this.setState({username: '', password: ''}))
    };
    handleInput = (e) => {
        this.setState({ //* name is an attribute that you always use.
            [e.target.name]: e.target.value
        })
    }
    //?other way to do this.
    //handleInput = (name, val) => {
        // this.setState({
        //     [name]: val
        //   })
        // }
    render(){
        // console.log(this.state.username, this.state.password) 
        return(
            <div className="Auth">
                
                <div className="authTitle">
                    Board Game Trade
                </div>
                <img className='authImg' src="https://static.thenounproject.com/png/138946-200.png" alt="bglogo"/>
                <div className="authBox">
                    <div>
                        <h1>Login</h1>
                    </div>
                    <input type="text"
                        placeholder='Username'
                        name='username'
                        value={this.state.username}
                        onChange={(e) => this.handleInput(e)}
                    />
                    <input type="password"
                        placeholder='Password'
                        name='password'
                        value={this.state.password}
                        onChange={(e) => this.handleInput(e)}
                    />
                    <div className="btnBox">
                        <button onClick={this.handleLogin}>Login</button>
                        <button onClick={this.handleRegister}>Register</button>
                    </div>

                    
                </div>
            </div>
        )
    }
}
const mapStateToProps = reduxState => { // to get state
    const { user } = reduxState;
    return {
      user
    };
  };
  
  const mapDispatchToProps = { // to get functions 
    updateUser
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Auth);

//?alternate way of connecting redux
// const mapStateToProps = reduxState => { // to get state
//     const { user } = reduxState;
//     return {
//       user
//     };
//   };
// export default connect(mapStateToProps, {updateUser} )(Auth);