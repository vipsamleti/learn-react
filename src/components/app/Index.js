import React, { Component } from 'react';
import Intro from '../intro/Intro'
import Employees from '../../containers/employees/Index'
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Learning ReactJS...
          </p>
          
          <Intro message = "Here you can pass a data to the component to render"/>

          <Employees/>

        </header>
      </div>
    );
  }
}

export default App;
