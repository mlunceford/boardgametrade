import React from 'react'
import './Profile.scss'

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div className="Profile">
                <div className="fixedScss"></div>
                Profile
                <div className="profileName"></div>
            </div>
        )
    }
}
export default Profile;