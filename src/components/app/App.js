import React, { Component } from 'react';
import Main from '../main/Main'
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          
          <h1>ReactJS Application for searching Web-Series details..</h1>

          <Main/>

        </header>
      </div>
    );
  }
}

export default App;
