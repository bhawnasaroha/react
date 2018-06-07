import React from 'react';

import './Person.css';

const Person = (props) => {

  return (
    <div className="Person">
      <p onClick={props.click}>I'm a person, my name is {props.name} and I believe in flat earth, {props.percent}%.</p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.change} />
    </div>
  );
}

export default Person;