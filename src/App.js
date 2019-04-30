import React, {Component} from 'react';

import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import Register from './Components/Register';
import Cleaner from './Components/Cleaner';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      list: []
    };
    this.searchForUser = this.searchForUser.bind(this);
  }


  componentDidMount() {
    axios.get('/api/cleaners').then((res)=>{
      this.setState({
        list: res.data
      })
    })
  }

  searchForUser(value){
    debugger
    axios.get(`/api/cleaners?search=${value}`).then((res) => {
      console.log(res.data)
    });
  }

  render(){
    const lister = this.state.list.reverse().map((e, i)=>{
      return <Cleaner key={i} name={e.name} photo={e.pic} motto={e.motto}/>
    })

    return (
      <div className="App">
        <Header abc={this.searchForUser}/>
        <Register />
        {lister}
      </div>
    );
  }
}

export default App;
