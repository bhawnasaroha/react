import React from 'react';

const UserInput = (props) => {
  const style = {
    backgroundColor: 'transparent',
    border: '4px solid black',
    borderRadius: '5px',
    textAlign: 'center',
    fontSize: '20px',
  }

  return (
    <div>
      <input type="text" onChange={props.change} value={props.value} style={style} />
    </div>
  );
}

export default UserInput;