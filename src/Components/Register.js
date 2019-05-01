import React, {Component} from 'react';

import './Register.css';

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            name: "",
            motto: "",
            pic: ""
        }
    }

    updateInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        return(
            <div className="Register">
              <div className="RegisterArea">
                <h1 className="rHeader">Register a cleaner:</h1>
                    <div className="inputBars">
                        <label>Name: <input className="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.updateInput}></input></label>
                        <label>Photo URL: <input className="Photo" placeholder="Photo URL" name="pic" value={this.state.pic} onChange={this.updateInput}></input></label>
                        <label>Motto: <input className="Motto" placeholder="Cleaner's motto?" name="motto" value={this.state.motto} onChange={this.updateInput}></input></label>
                    </div>
                    <button className="RegButton" onClick={() => {this.props.addCleaner(this.state)}}>Register</button>
              </div>
                
            </div>
            
        )
    }
}

export default Register;