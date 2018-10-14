import React, { Component } from 'react';
import Header from './presentationals/Header';
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