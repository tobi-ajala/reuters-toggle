import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = { showing: true };

  render() {

    const { showing } = this.state;
    const { end } = this.state;

    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>


        <div className="module">
          <p className="close" onClick={() => this.setState({ end: !end })}>X</p>
          <div className="close-all" style={{ display: (end ? 'none' : 'block') }}>
            <p className="module-title">Module Title</p>
            <p className="dummy-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud <b>Exercitation</b> ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
              <div style={{ display: (showing ? 'none' : 'block') }}>
                <p className="text-one">
                  <p className="text-title"> Details </p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud.
                  <p className="text-title"> More info </p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud.
                </p>
              </div>
              <button className="show" onClick={() => this.setState({ showing: !showing })}>Show More</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
