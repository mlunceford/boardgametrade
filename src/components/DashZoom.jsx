import React from 'react'

class DashZoom extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            item_id: []
        }
    }
    //todo the commented out below is copied from TradeList.jsx
    render(){
        return(
            <div className="DashZoom">
                <div className="fixedScss"></div>

                DashZoom
                <div className="test"></div>
                {/* <div  className="imgBox"> <img className='tradeImg' src={this.props.listTrade.img} alt="No Img"/> </div>
                <div className="textBox">
                    <div>{this.props.listTrade.name}</div>
                    <div>
                        {this.props.listTrade.cost}
                    </div>
                </div>
                <div>
                    {this.props.listTrade.description}
                </div> */}
            </div>
        )
    }
}
export default DashZoom;