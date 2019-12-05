import React from "react";
import { connect } from "react-redux";
import SaveTradeMap from "./SaveTradeMap";
import axios from "axios";

class SaveTrade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saveTradeItem: [...this.props.reduxstate.reducer.saveTradeItem]
    };
  }
  componentDidMount = () => {
    this.setState({
      saveTradeItem: [...this.props.reduxstate.reducer.saveTradeItem]
    });
  };
  
  render() {
    console.log(this.props);
    console.log(this.state);
    let saveTradeMaps = this.state.saveTradeItem.map((el, i) => {
      return (
        <SaveTradeMap
          key={i}
          saveTradeMaps={el}
          deleteTrade={this.deleteTrade}
        />
      );
    });
    return (
      <div className="SaveTrade">
        <div className="fixedScss"></div>
        <div className="title">SaveTrade</div>
        {saveTradeMaps}
      </div>
    );
  }
}
const mapStateToProps = reduxstate => {
  return {
    reduxstate
  };
};
export default connect(mapStateToProps)(SaveTrade);

