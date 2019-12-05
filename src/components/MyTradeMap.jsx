import React from 'react'

class MyTradeMap extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className='MyTradeMap'>
                <div  className="imgBox"> <img className='tradeImg' src={this.props.listTrade.img} alt="No Img"/> </div>
                <div className="textBox">
                    <div>{this.props.MyTradeMap.name}</div>
                    <div>
                        {this.props.MyTradeMap.cost}
                    </div>
                </div>
                <div>
                    {this.props.MyTradeMap.description}
                </div>
    
                {/* {this.props.MyTradeMap.description}  */}
            </div>
        )
    }
}
export default MyTradeMap;