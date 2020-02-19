import React from 'react'
import {connect} from 'react-redux'
import {updateUser} from '../ducks/reducer'

//? need to get 

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    getUserData =()=> {

    }
    render(){
        console.log(this.props)
        return(
            <div className="Profile">
                <div className="fixedScss"></div>
                <div className="profileName">Profile</div>
            </div>
        )
    }
}
const mapStateToProps=(reduxstate) => {
    return {reduxstate}
}
export default connect(mapStateToProps, {updateUser})(Profile);