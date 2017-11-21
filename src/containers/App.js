import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import ProductContainer from './ProductContainer'
import ProductTypes from '../constants/ProductTypes'
import Products from '../api/products.json'
import {OnProductTypeChange} from '../actions/index.js'
import {OnProductEdit} from '../actions/index.js'
const InitialProduct = {description:'Omelette', cost:8.50, type: 2}

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
        <ProductContainer  products={Products} productTypes={ProductTypes} initialProduct={InitialProduct} onProductTypeChange={OnProductTypeChange} onProductEdit={OnProductEdit} />
      </div>
    );
  }
}

export default App;
