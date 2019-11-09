import React from 'react'
import './AddTrade.scss'
import axios from 'axios'
import { connect } from 'react-redux'
import { addTrade } from '../ducks/reducer'
import {withRouter} from 'react-router-dom'


class AddTrade extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            imgurl: '',
            cost: ''
        }
    }

    handleSubmit = (e) =>  {
        e.preventDefault()
         console.log('hit handle submit funct')

        const { name, description, imgurl, cost} = this.state
        axios.post('/api/trade', {
            name: name,
            description: description,
            imgurl: imgurl,
            cost: cost,
            user_id: this.props.store.reducer.user.user_id
        }).then(res => { console.log('hit handleSubmit')
            this.props.addTrade(res.data);
            this.props.history.push('/dashboard');
            this.setState({
                name: '',
                description: '',
                imgurl: '',
                cost: ''
            })
        })
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        console.log(this.props)
        return (
            
            <div className="AddTrade">
                <div className="fixedScss"></div>
                <form className='addForm' action="">
                    <input type="text"
                        name='name'
                        placeholder='Name of Board Game'
                        value={this.state.name}
                        onChange={(e) => this.handleInput(e)}
                    />
                    <input type="text"
                        name='imgurl'
                        placeholder='Image Url'
                        value={this.state.imgurl}
                        onChange={(e) => this.handleInput(e)}
                    />
                    <input type="text"
                        name='cost'
                        placeholder='Cost &/or Trade'
                        value={this.state.cost}
                        onChange={(e) => this.handleInput(e)}
                    />
                    <textarea type='text'
                        name="description"
                        placeholder='Write a Description'
                        cols="20" rows="10"
                        value={this.state.description}
                        onChange={(e) => this.handleInput(e)}
                    ></textarea>
                    <button type='submit'
                        name='submit'
                        onClick={e => this.handleSubmit(e)}
                    >Submit</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = stateFromRedux => {
    const { addTradeRedux, user, trades } = stateFromRedux;
    return {
        store: stateFromRedux
    }
}
export default withRouter(connect(mapStateToProps, { addTrade })(AddTrade));