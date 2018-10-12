import React, { Component } from 'react';
import Table from "./components/Table"
import Search from "./components/Search.js"
import Header from './components/Header';
import Router from './Router';

class App extends Component {



  render() {
    return (
      <section>
          <Header/>
          <Router/>
      </section>
    )
  }
}

export default App