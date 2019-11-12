import React from 'react'
import './Dashboard.scss'
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
    //todo need to make a route to DashZoom when clicking on an item
    saveTradeClick = () => {
        this.props.getSaveTradeByItemId()
        this.props.history.push('/savetrade')
        // axios.get('/api/trade', {
        //     item_id: this.props.trades.trades.item_id
        // }).then(res => { console.log('handledashzoom')
        //     this.setState({ item_id: this.props.trades.trades.item_id})
        //     this.props.get(res.data)
            
        //     this.props.history.push('/savetrade');
        //     // let dashZoomTrade = this.props.props.trades.map((element, index) => {
        //     //     return <Dashzoom key={index} dashZoomTrade={element}/>

        //     // })
        // })
    }
    render(){
        console.log(this.props.trades.trades)
        // console.log(this.props.trades.trades)
        // console.log(this.state)

        let listTrade = this.props.trades.trades.map((element, index)=> {
            return <TradeList key={index} listTrade={element} saveTradeClick={this.saveTradeClick} />;
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