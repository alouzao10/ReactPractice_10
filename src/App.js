import React from 'react';

import './App.css';

import Greetings from './Components/Greetings';
import Messages from './Components/Messages';

// To include state in functional components
// Need to include the useState method
// const [user, setUser] = useState({
//   name: "bob"
// })

class App extends React.Component {
  // Builds the state or "global" values that can be used
  constructor(props) {
    super();
    this.state = {
      name: 'Bob',
      hasRead: false,
      viewCount: 0,
    };

    this.users = [
      {
        name: 'Jim',
        tweet: 'Hello',
        likes: 5,
      },
      {
        name: 'Tim',
        tweet: 'Hello Again',
        likes: 2,
      },
      {
        name: 'Pam',
        tweet: 'Hello Again Again',
        likes: 9,
      },
    ];
  }

  incrementCount = () => {
    this.setState({ viewCount: this.state.viewCount + 1 });
  };

  // Logic and Variables is applied before the return
  sayHello = () => {
    console.log('HOLA ' + this.state.name);
  };

  message = 'Say Hello!';

  render() {
    return (
      // Anything to display, toggle, or input
      <div>
        <h1>Hello</h1>
        <button onClick={this.sayHello}>{this.message}</button>
        <Greetings message={'Greetings'} sayHello={this.sayHello} />
        <hr />
        <Messages name='Tim' tweet='Cool story bro' likes={5} />
        <hr />
        <Messages name='Sally' tweet='Cool story gal' likes={9} />
        <hr />
        <button onClick={this.incrementCount}>Increment</button>
        <h4>{this.state.viewCount}</h4>
        <hr />
        {this.users.map((user) => (
          <Messages name={user.name} tweet={user.tweet} likes={user.likes} />
        ))}
      </div>
    );
  }
}

export default App;
