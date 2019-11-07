import React from 'react'
import './AddTrade.scss'

class AddTrade extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            description: '',
            imgurl: '',
            cost: ''
        }
    }
    
    handleSubmit = () => {
        const {name, description, imgurl, cost} = this.state
        axios.post('/api/trade', {
            name: name,
            description: description,
            imgurl: imgurl,
            cost: cost
        }).then(res => { console.log('hit submit')
            this.
        })
    }
    handleInput =(e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        console.log(this.state.name)
        return(
            <div className="AddTrade">
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
                    value={this.state.img}
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
                    >Submit</button>
                </form>
            </div>
        )
    }
}
export default AddTrade;