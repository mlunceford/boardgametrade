import React from 'react'
import './SaveTrade.scss'
import { connect } from 'react-redux'
import SaveTradeMap from './SaveTradeMap'
import axios from 'axios'


class SaveTrade extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            saveTradeItem: [...this.props.reduxstate.reducer.saveTradeItem]
        }
    }
    componentDidMount = () => {
        this.setState({
            saveTradeItem: [...this.props.reduxstate.reducer.saveTradeItem]
        })
    }
    deleteTrade = (index) => {
        // let del = this.props.reduxstate.reducer.saveTradeItem.filter((el,i) => {
        //     if( i === el[i]){
        //         console.log(i)
        //         return [this.props.reduxstate.reducer.saveTradeItem.splice(i, 1)]
        //     }
        // }) 
        // console.log(del)
        
        this.setState({
            saveTradeItem: [...this.props.reduxstate.reducer.saveTradeItem.splice(index, 1)]
        })

    }
    render() {
        console.log(this.props)
        console.log(this.state)

        let saveTradeMaps = this.state.saveTradeItem.map((el, i) => {
            return <SaveTradeMap key={i} saveTradeMaps={el} deleteTrade={this.deleteTrade} />
        })
        return (
            <div className="SaveTrade">
                <div className="fixedScss"></div>
                <div className="title">SaveTrade</div>
                {saveTradeMaps}
            </div>
        )
    }
}
const mapStateToProps = reduxstate => {
    return {
        reduxstate
    }
}
export default connect(mapStateToProps)(SaveTrade);