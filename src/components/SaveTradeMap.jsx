import React from 'react'
import './SaveTradeMap.scss'
import { connect } from 'react-redux'
import { deleteSave } from '../ducks/reducer'

class SaveTradeMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    render() {
        console.log(this.props)
        return (
            <div className='SaveTradeMap'>
                <div className="imgBox"> <img className='tradeImg' src={this.props.saveTradeMaps.img} alt="No Img" /> </div>
                <div className="textBox">
                    <div>{this.props.saveTradeMaps.name}</div>
                    <div>
                        {this.props.saveTradeMaps.cost}
                    </div>
                </div>
                <div className='saveTextBox'>
                    {this.props.saveTradeMaps.description}
                    <button onClick={() => this.props.deleteTrade(this.props.key)} >Delete</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (reduxstate) => {
    return { reduxstate }
}
export default connect(mapStateToProps, { deleteSave })(SaveTradeMap);