import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import headerimg from '../src/img/e261196f715c38c4a75b6f7b9ae46a91.png';


class App extends Component {
  render() {
    return (
      <div className="App">
      {/* menu start*/}
      <nav>
            <ul>
              <li className='on'><a target="_blank">Home</a></li>
              <li><a target="_blank">Demo</a></li>
              <li><a target="_blank">About Me</a></li>
            </ul>
          </nav>
        <section className="home">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://yaw.ee/page/8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <div className='info'>
            <div className='headerimg'>
              <img src={headerimg}/>
            </div>
            <h2>livia</h2>
            <p>堅持&nbsp;&nbsp;|&nbsp;&nbsp;努力</p>
          </div>
        </section>
        <section className="demo">

        </section>
      </div>
    );
  }
}

export default App;
