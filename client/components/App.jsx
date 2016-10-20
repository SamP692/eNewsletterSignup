import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    };
    this.changeStateToReflectInput = this.changeStateToReflectInput.bind(this);
  }
  changeStateToReflectInput(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
    console.log(`Name: ${this.state.name} | Email: ${this.state.email}`);
  }
  // sendToDatabase() {
  //
  // }
  render() {
    return(
      <div>
        <h1>Welcome to Lottery Oracle!</h1>
        <p>Your best source on the web for future winning lottery numbers</p>
        <input type="text" name="name" onChange={this.changeStateToReflectInput} value={this.state.name} placeholder="Your Name" />
        <input type="text" name="email" onChange={this.changeStateToReflectInput} value={this.state.email} placeholder="Your Email" />
        <button onClick={this.sendToDatabase}>Subscribe</button>
      </div>
    );
  }
}
