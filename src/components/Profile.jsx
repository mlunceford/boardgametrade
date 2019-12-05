import React from 'react'
import {connect} from 'react-redux'


class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    render(){
        console.log(this.props)
        return(
            <div className="Profile">
                <div className="fixedScss"></div>
                Profile
                <div className="profileName"></div>
            </div>
        )
    }
}
const mapStateToProps=(reduxstate) => {
    return {reduxstate}
}
export default connect(mapStateToProps)(Profile);