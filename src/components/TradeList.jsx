import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getSaveTradeByItemId } from '../ducks/reducer'
import {withRouter} from 'react-router-dom'


class TradeList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    click = ()=> {
        this.props.getSaveTradeByItemId(this.props.listTrade.item_id)
        this.props.history.push('/savetrade')
    }

    render() {
        // console.log(this.props)
        // console.log(this.props.listTrade.item_id)
        return (
            <div className='listTrade' onClick={() =>this.click()}  >
                <div className="imgBox"> <img className='tradeImg' src={this.props.listTrade.img} alt="No Img" /> </div>
                <div className="textBox">
                    <div>{this.props.listTrade.name}</div>
                    <div>{this.props.listTrade.cost}</div>
                </div>
                <div className='listBox'>{this.props.listTrade.description}</div>

                {/* {this.props.listTrade.description}  */}
            </div>
        )
    }
}
const mapStateToProps = (reduxstate) => {
    return { reduxstate }
}
export default withRouter(connect(mapStateToProps, { getSaveTradeByItemId })(TradeList));