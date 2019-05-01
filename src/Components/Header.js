import React, {Component} from 'react';

import './Header.css';

class Header extends Component{
    constructor(props){
        super(props)

        this.state = {
            userInput: ""
        }
    }

    updateInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        return(
            <div className = "Header">
            <img className="HeaderTitle" src="https://imgur.com/eGrAi11.jpg" alt="Fantasy Cleaners Inc."/>
                <div className="search">
                    <input value={this.state.userInput} name="userInput" placeholder="Search by name" onChange={this.updateInput}/>
                    <button onClick={()=> {this.props.abc(this.state.userInput)}}>Search</button>
                </div>
                
            </div>
        )
    }
}

export default Header;