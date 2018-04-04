import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style/comment1.css'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div>
      //   <h1>React 小书</h1>
      // </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


// ReactDOM.render(
//   <Header />,
//   document.getElementById('root')
// )
export default App;
