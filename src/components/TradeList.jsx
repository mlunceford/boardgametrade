import React from 'react'
import './TradeList.scss'

class TradeList extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <div className='listTrade'>
                <div  className="imgBox"> <img className='tradeImg' src={this.props.listTrade.img} alt="No Img"/> </div>
                <div className="textBox">
                    <div>
                    {this.props.listTrade.name}
                    </div>
                    <div>
                    {this.props.listTrade.cost}
                    </div>
                </div>
    
                {/* {this.props.listTrade.description}  */}
            </div>
        )
    }
}
export default TradeList;