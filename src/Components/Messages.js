import React, { Component } from 'react';

class Messages extends Component {
  render() {
    return (
      <div className='tweet'>
        <h3>Name: {this.props.name}</h3>
        <p>Message: {this.props.tweet}</p>
        <h4>Likes: {this.props.likes}</h4>
      </div>
    );
  }
}

export default Messages;
