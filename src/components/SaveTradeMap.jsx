import React from "react";
import { connect } from "react-redux";
import { deleteTrade, editTrade } from "../ducks/reducer";
import { RSA_PKCS1_OAEP_PADDING } from "constants";

class SaveTradeMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        img: '',
        description: '',
        cost: ''
    };
  }
  //todo i need to do  a join, put and delete. dont be a pussy you dumb ass be smart.
  editTradeBtn = id => {
    const { name, img, description, cost } = this.state;
    this.props.editTrade(name,description, img, cost, id);
    this.setState({
      name: '',
      img: '',
      description: '',
      cost: ''
    });
  };
//todo dodnt know why this doesnt work. or really dont know how to name it.
//   componentDidUpdate = prevProps => {
//       console.log(prevProps)
//     if (prevProps.mapTrade !== this.state.mapTrade) {
//       this.setState({
//         saveTradeItem: this.props.reduxstate.reducer.saveTradeItem
//       });
//     }
//   };

  handleInputs = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value})
  };
  render() {
    console.log(this.props);
    return (
      <div className="SaveTradeMap">
        <div className="imgBox">
          {" "}
          <img
            className="tradeImg"
            src={this.props.saveTradeMaps.img}
            alt="No Img"
          />{" "}
        </div>
        <div className="textBox">
          <div>{this.props.saveTradeMaps.name}</div>
          <div>{this.props.saveTradeMaps.cost}</div>
        </div>
        <div className="saveTextBox">
          {this.props.saveTradeMaps.description}
          <button onClick={() => this.editTradeBtn(this.props.saveTradeMaps.item_id)}>Edit</button>
          <button onClick={() => this.props.deleteTrade(this.props.saveTradeMaps.item_id)}>Delete</button>
        </div>
        <input
          name="name"
          value={this.name}
          placeholder="Edit Name"
          onChange={e => this.handleInputs(e)}
        />
        <input
          name="img"
          value={this.img}
          placeholder='Edit Img Url'
          onChange={e => this.handleInputs(e)}
        />        
        <input
          name="cost"
          value={this.cost}
          placeholder="Edit Cost"
          onChange={e => this.handleInputs(e)}
        />
        <input
          name="description"
          value={this.description}
          placeholder='Edit description'
          onChange={e => this.handleInputs(e)}
        />        
      </div>
    );
  }
}
const mapStateToProps = reduxstate => {
  return { reduxstate };
};
export default connect(mapStateToProps, { deleteTrade, editTrade })(
  SaveTradeMap
);
