import React, {Component} from 'react';
import './Register.css'

class Updater extends Component{
    constructor(props){
        super(props);

        this.state={
            id: 0,
            name: "",
            motto: "",
            pic: ""
        }
    }

    updateValue = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
                <div className="RegisterArea">
                    <h1 className="rHeader">Update a Cleaner's Profile</h1>
                    <div className="inputBars">
                        <label>ID number of cleaner:<input type="text" name="id" onChange={this.updateValue} value={this.state.id}></input></label>
                        <label>Updated Name:<input type="text" name="name" onChange={this.updateValue} value={this.state.name}></input></label>
                        <label>Updated Motto:<input type="text" name="motto" onChange={this.updateValue} value={this.state.motto}></input></label>
                        <label>Updated Picture URL:<input type="text" name="pic" onChange={this.updateValue} value={this.state.pic}></input></label>
                    </div>
                    <button  onClick={() => this.props.updateCleaner(this.state)}>Submit Change</button>
                </div>
        )
    }
}

export default Updater;