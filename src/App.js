import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar';




export default class App extends Component{
  state={
    progress:0
  }
  setprogress(progress){
    this.setState({progress:progress})

  }
  render(){
    return(
      <>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
     <Navbar/>
     <News setprogress={this.setprogress}/>
     </>
    )
  }
}
