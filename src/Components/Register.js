import React, {Component} from 'react';

class Register extends Component{
    render(){
        return(
            <div className="Register">
                <h1>Register a cleaner:</h1>
                <div className="input bars">
                    <label>Name<input className="Name" placeholder="Name"></input></label>
                    <label>Photo URL<input className="Photo" placeholder="Photo URL"></input></label>
                    <label>Motto<input className="Motto" placeholder="Cleaner's motto?"></input></label>
                    <button>Register</button>
                </div>
            </div>
            
        )
    }
}

export default Register;