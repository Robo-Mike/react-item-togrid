import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductEdit from './components/ProductEdit';
import ProductTypes from './constants/ProductTypes';
import OnProductTypeChange from './actions/index.js';
const DummyProduct = {description:'Omelette', cost:8.50, type: 2}
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
        <ProductEdit productTypes={ProductTypes} product = {DummyProduct}
        onProductTypeChange = {(e) => {OnProductTypeChange(e)
        }} />
      </div>
    );
  }
}

export default App;
