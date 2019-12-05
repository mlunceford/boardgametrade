import React from 'react'
import {connect} from 'react-redux'
import {getTrades} from '../ducks/reducer'
import {getSaveTradeByItemId} from '../ducks/reducer'
import TradeList from './TradeList'
import axios from 'axios'
import DashZoom from './DashZoom'


class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            trades: [],
            item_id: []
        }
    }
    componentDidMount = () => {
        this.props.getTrades()
        // this.setState({
        //     trades: this.props.trades.trades
        // })
    }
    
    render(){
        console.log(this.props.trades)
        // console.log(this.props.trades.trades)
        // console.log(this.state)

        let listTrade = this.props.trades.trades.map((element, index)=> {
            return <TradeList key={index} listTrade={element}/>;
        })
        
        return(
            <div className="Dashboard">
                <div className="fixedScss"></div>
                {listTrade}
            </div>
        )
    }
}
const mapStateToProps = state => { 
    return{
        trades: state.reducer,
        saveTradeItemId: state.reducer
    }
}
// const mapDispatchToProps = {
//     getTrades,
//     getSaveTradeByItemId
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
export default connect(mapStateToProps, {getTrades, getSaveTradeByItemId})(Dashboard);