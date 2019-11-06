import React from 'react'
import './AddTrade.scss'

class AddTrade extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div className="AddTrade">
                <form className='addForm' action="">
                    <input type="text" name='name' placeholder='Name of Board Game'/>
                    <input type="text" name='imgurl' placeholder='Image Url'/>
                    <input type="text" name='price' placeholder='Price &/or Trade'/>
                    <textarea name="description" placeholder='Write a Description' cols="20" rows="10"></textarea>
                    <button type='submit' name='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
export default AddTrade;