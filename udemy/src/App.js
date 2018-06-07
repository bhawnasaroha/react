import React, { Component } from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Shane', percent: 94, children: 'I do conspiracy theories.' },
      { name: 'Ryland', percent: 40 },
      { name: 'Garrett', percent: 100, children: 'I like Harry Potter.' },
    ],
    showPersons: false,
  };

  switchNameHandler = (changedName) => {
    // console.log('clicked');
    // DONT DO IT LIKE THIS ------ this.state.persons[0].name = 'Ryan';
    this.setState({
      persons: [
        { name: changedName, percent: 94, children: 'I do conspiracy theories.' },
        { name: 'Ryland', percent: 40 },
        { name: 'Garrett', percent: 100, children: 'I like Harry Potter.' },
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Shane', percent: 94, children: 'I do conspiracy theories.' },
        { name: event.target.value, percent: 40 },
        { name: 'Garrett', percent: 100, children: 'I like Harry Potter.' },
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: '#000',
      color: '#fff',
      padding: '12px',
      border: '2px solid #7fffd4',
      borderRadius: '8px',
      textTransform: 'uppercase',
      cursor: 'pointer'
    };

    let persons = null;

    if( this.state.showPersons ) {
      persons = 
      <div>
        <Person 
        name={this.state.persons[0].name} 
        percent={this.state.persons[0].percent}>
        {this.state.persons[0].children}
        </Person>
        <Person 
        name={this.state.persons[1].name} 
        percent={this.state.persons[1].percent}
        click={this.switchNameHandler.bind(this, 'Sherlock')}
        change={this.nameChangedHandler.bind( this )} />
        <Person 
        name={this.state.persons[2].name} 
        percent={this.state.persons[2].percent}>
        {this.state.persons[2].children}
        </Person>
      </div>
    };
    
    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <p>Sure thing</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Show up</button>       
      {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', {className: 'blue'}, 'hi there'));
  }
}

export default App;
