import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 'fjfj3', name: 'Shane', percent: 94, children: 'I do conspiracy theories.' },
      { id: 'kjoj5', name: 'Ryland', percent: 40 },
      { id: 'dfrw9', name: 'Garrett', percent: 100, children: 'I like Harry Potter.' },
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: '#40d6a3',
      color: '#000',
      padding: '12px',
      borderRadius: '8px',
      textTransform: 'uppercase',
      cursor: 'pointer',
      transition: '.3s ease',
    };

    let persons = null;

    if( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person 
            key={person.id}
            name={person.name} 
            percent={person.percent} 
            children={person.children}
            click={() => this.deletePersonHandler(index)}
            changed={(event) => {this.nameChangedHandler(event, person.id)}} />
          })}
        </div>
      );

      style.backgroundColor = '#030388';
      style.color = '#fff';
    };

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('blue');
    }
    if(this.state.persons.length <= 1) {
      classes.push('italic');
    }
    
    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <p className={classes.join(' ')}>Sure thing</p>
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
