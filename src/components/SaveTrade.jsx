import React from 'react'
import './SaveTrade.scss'
import {connect} from 'react-redux'

class SaveTrade extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        console.log(this.props.saveTradeItemId)
        return(
            <div className="SaveTrade">
                <div className="fixedScss"></div>
                <div className="title">SaveTrade</div>
                SaveTrade
                {this.props.saveTradeItemId.trades.item_id}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        saveTradeItemId: state.reducer
    }
}
export default connect(mapStateToProps)(SaveTrade);