import React from 'react';
import classes from'./Person.css';

const Person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I'm a person, my name is {props.name} and I believe in flat earth, {props.percent}%.</p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
}

export default Person;