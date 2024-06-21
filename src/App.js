import './App.css';
import React, {Component} from 'react';
import {Navbar} from './components/navbar';
import {News} from './components/news';
import { Route,Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import ScrollToTop from 'react-scroll-to-top';
export default class App extends Component{
  apikey = "df2e302255914287aa22599678369ac7"
  state = {
    progress: 0,
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render(){
  return (
    <div>
      <Navbar/>
      <LoadingBar color='red' progress={this.state.progress}/>
      <Routes>
        <Route path='/' element={<News setProgress={this.setProgress} key="general" apikey= {this.apikey}category="general"/>}></Route>
        <Route path='/sports' element={<News setProgress={this.setProgress} key="sports" apikey= {this.apikey}category="sports"/>}></Route>
        <Route path='/business' element={<News setProgress={this.setProgress} key="business" apikey= {this.apikey}category="business"/>}></Route>
        <Route path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" apikey= {this.apikey}category="entertainment"/>}></Route>
        <Route path='/health' element={<News setProgress={this.setProgress} key="health" apikey= {this.apikey}category="health"/>}></Route>
        <Route path='/science' element={<News setProgress={this.setProgress} key="science" apikey= {this.apikey}category="science"/>}></Route>
        <Route path='/technology' element={<News setProgress={this.setProgress} key="technology" apikey= {this.apikey}category="technology"/>}></Route>
      </Routes>
      <ScrollToTop 
smooth 
color='seagreen'
style={{backgroundColor:'black', borderRadius:'80px'}}/>
    </div>
    
  );
}
}
