import React, { Component } from 'react';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

import './App.css';

class App extends Component {
  state = {
    username: "Liza Koshy",
  };

  switchUserNameHandler = (event) => {
    this.setState ({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput 
          change={this.switchUserNameHandler.bind( this )} value={this.state.username}/>
        <UserOutput username={this.state.username} />
        <UserOutput username="Ryan Higa" />
      </div>
    );
  }
}

export default App;
