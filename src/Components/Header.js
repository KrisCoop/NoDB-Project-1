import React, {Component} from 'react';

class Header extends Component{
    constructor(props){
        super(props)

        this.state = {
            userInput: ""
        }
    }

    updateInput = (e) => {
        debugger
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){


        return(
            <div className = "Header">
                <h1>Fantasy Cleaners</h1>
                <input className="search" value={this.state.userInput} name="userInput" placeholder="Search" onChange={this.updateInput}/>
                <button onClick={this.props.abc(this.state.userInput)}>Search</button>
            </div>
        )
    }
}

export default Header;