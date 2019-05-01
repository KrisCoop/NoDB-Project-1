import React, {Component} from 'react';

import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import Register from './Components/Register';
import Cleaner from './Components/Cleaner';
// import Updater from './Components/Updater';


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
    axios.get(`/api/cleaners/${value}`).then((res) => {
      this.setState({
        list: res.data
      })
    });
  }

  addCleaner = (newCleaner) =>{
    axios.post('/api/cleaners', newCleaner).then((res) =>{
      this.setState({
        list: res.data
      })
    })
  }

  hire = (id) => {
    axios.delete(`/api/cleaners/${id}`).then((res)=>{
      this.setState({
        list: res.data
      })
    })
  }

  // updateCleaner = (obj) => {
  //   axios.put('/api/cleaners', obj).then((res) => {
  //     this.setState({
  //       list: res.data
  //     })
  //   })
  // }


  render(){
    const lister = this.state.list.reverse().map((e, i)=>{
      return <Cleaner key={i} name={e.name} photo={e.pic} motto={e.motto} hire={this.hire} id={e.id}/>
    })

    return (
      <div className="App">
        <Header abc={this.searchForUser}/>
        <Register addCleaner={this.addCleaner} />
        <div className="lister">
          {lister}
        </div>
        
        {/* <Updater updateCleaner={this.updateCleaner}/> */}
      </div>
    );
  }
}

export default App;
