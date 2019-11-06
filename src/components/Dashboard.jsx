import React from 'react'
import './Dashboard.scss'

class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }
    componentDidMount = () => {
        this.props.getTrades()
    }
    //todo need to make a route to DashZoom when clicking on an item
    render(){
        return(
            <div className="Dashboard">
                Dashboard
            </div>
        )
    }
}
export default Dashboard;