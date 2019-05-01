import React, {Component} from 'react';

import './Cleaner.css';

class Cleaner extends Component{
    render(){
        return(
            <div className="cleanerMain">
                <p>ID: {this.props.id}</p>
                <h1 className="Moniker">{this.props.name}</h1>
                <img className="portrait" src={this.props.photo} alt=""></img>
                <p>{this.props.motto}</p>
                <button onClick={()=> this.props.hire(this.props.id)}>Hire</button>
            </div>
        )
    }
}

export default Cleaner;