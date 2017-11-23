import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import reducer from './reducers'
import thunk from 'redux-thunk'
import getAllProducts from  './actions/index'
const store = createStore(
  reducer,{}
)

store.dispatch(getAllProducts)
// store.dispatch(getAllProducts())

ReactDOM.render(  <Provider store={store}><App /></Provider>
, document.getElementById('root'));
registerServiceWorker();
