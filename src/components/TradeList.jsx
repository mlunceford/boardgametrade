import React from 'react'
import './TradeList.scss'
import axios from 'axios'


class TradeList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            item_id: []
        }
    }
    
    render(){
        // console.log(this.props.listTrade.item_id)
        return (
            <div className='listTrade' onClick={this.props.saveTradeClick}  >
                <div  className="imgBox"> <img className='tradeImg' src={this.props.listTrade.img} alt="No Img"/> </div>
                <div className="textBox">
                    <div>{this.props.listTrade.name}</div>
                    <div>
                        {this.props.listTrade.cost}
                    </div>
                </div>
                <div>
                    {this.props.listTrade.description}
                </div>
    
                {/* {this.props.listTrade.description}  */}
            </div>
        )
    }
}
export default TradeList;