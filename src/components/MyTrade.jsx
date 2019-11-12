import React from 'react'
import './MyTrade.scss'
import {connect} from 'react-redux'
import {getMyTrades} from '../ducks/reducer'
import MyTradeMap from './MyTradeMap'



class MyTrade extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            myTrades: []
        }
    }
    componentDidMount = () => {
        this.props.getMyTrades()
    }
    render(){
        console.log(this.props)
        let myTradeMap = this.props.myTrades.myTrades.map((element, index) => {
            return <MyTradeMap key={index} myTradeMap={element}/> 
        })
        return(
            <div className="MyTrade">
                <div className="fixedScss"></div>
                <div className="title">My Trades</div>
                {myTradeMap}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {myTrades: state.reducer}
}
export default connect(mapStateToProps, {getMyTrades})(MyTrade);