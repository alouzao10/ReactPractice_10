import React from 'react';

function Greetings(props) {
  const sayHello = () => {
    console.log('Bonjeurno');
  };

  return (
    <div>
      <button onClick={sayHello}>{props.message} 1</button>
      <button onClick={props.sayHello}>{props.message} 2</button>
    </div>
  );
}

export default Greetings;
