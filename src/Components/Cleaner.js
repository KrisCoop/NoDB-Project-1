import React, {Component} from 'react';

class Cleaner extends Component{
    render(){
        return(
            <div className="cleanerMain">
                <h1>{this.props.name}</h1>
                <img src={this.props.photo} alt="" height="400px" width="350px"></img>
                <p>{this.props.motto}</p>
                <button onClick={this.props.hire}>Hire</button>
            </div>
        )
    }
}

export default Cleaner;