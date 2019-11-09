import React from 'react'
import './Dashboard.scss'
import {connect} from 'react-redux'
import {getTrades} from '../ducks/reducer'
import TradeList from './TradeList'


class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            trades: []
        }
    }
    componentDidMount = () => {
        this.props.getTrades()
        // this.setState({
        //     trades: this.props.trades.trades
        // })
    }
    //todo need to make a route to DashZoom when clicking on an item

    render(){
        console.log(this.props)
        console.log(this.props.trades.trades)
        console.log(this.state)
        let list = this.props.trades.trades.map((element, index)=> {
            return <TradeList key={index} listTrade={element} />;
        })
        return(
            <div className="Dashboard">
                <div className="fixedScss"></div>
                {list}
            </div>
        )
    }
}
const mapStateToProps = state => { 
    return{trades: state.reducer}
}
export default connect(mapStateToProps, {getTrades})(Dashboard);