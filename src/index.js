import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';
import {reducers} from './reducers';


import { AUTHENTICATED } from './constants';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

const user = localStorage.getItem('user');
if(user) {
  store.dispatch({ type: AUTHENTICATED });
}




store.subscribe(() => console.log(store.getState()))

ReactDOM.render((
    <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
    </Provider>
), document.getElementById('root'))

serviceWorker.unregister();


