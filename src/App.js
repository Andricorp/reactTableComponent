import React, { Component } from 'react';
import './App.css';
import Table from "./Table.js"
import Search from "./Search.js"
import { Provider } from 'react-redux'
// import store from './createStore'


import { createStore, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form'

import thunk from 'redux-thunk';
// import axios from 'axios';

import redusers from './redusers';

const store = createStore(
  redusers,
  // window.INITIAL_STATE, 
  applyMiddleware(thunk)
);

store.subscribe(()=>console.log(store.getState()))

class App extends Component {



  render() {
    return (
      <Provider store={store}>
      <section>
      <Search/>
        <Table />

      </section>
      </Provider>
    )
  }
}

export default App