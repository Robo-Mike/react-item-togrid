import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import ProductContainer from './ProductContainer'




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Item to Grid</h1>
        </header>
        <p>
          A work in progress..
        </p>
        <ProductContainer  />
      </div>
    );
  }
}

export default App;
