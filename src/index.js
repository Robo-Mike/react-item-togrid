import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import reducer from './reducers'
import thunk from 'redux-thunk'
import {getAllProducts} from  './actions/index'

/*thunk allows us to create action creators that return a function rather an object, allows conditional, async code etc */
const middleware = [ thunk ];
//push other middle ware into array here

// reducers are applied HERE
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)



store.dispatch(getAllProducts())


ReactDOM.render(  <Provider store={store}><App /></Provider>
, document.getElementById('root'));
registerServiceWorker();
